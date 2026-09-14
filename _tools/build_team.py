import re, pathlib, subprocess, html, json
root = pathlib.Path('.')
def dims(path):
    o=subprocess.run(['sips','-g','pixelWidth','-g','pixelHeight',path],capture_output=True,text=True).stdout
    return int(re.search(r'pixelWidth: (\d+)',o).group(1)), int(re.search(r'pixelHeight: (\d+)',o).group(1))

# ---------- 1. nav + footer links on index.html ----------
p=root/'index.html'; s=p.read_text()
s=s.replace('                <a href="about.html">Our Story</a>\n                <a href="why-gymnastics.html">Why Gymnastics</a>',
            '                <a href="about.html">Our Story</a>\n                <a href="leadership.html">Leadership Team</a>\n                <a href="coaches.html">Our Coaches</a>\n                <a href="why-gymnastics.html">Why Gymnastics</a>')
s=s.replace('          <li><a href="about.html">Our story</a> · <a href="why-gymnastics.html">Why gymnastics</a></li>',
            '          <li><a href="about.html">Our story</a> · <a href="why-gymnastics.html">Why gymnastics</a></li>\n          <li><a href="leadership.html">Leadership team</a> · <a href="coaches.html">Our coaches</a></li>')
p.write_text(s)
assert 'leadership.html' in s

# ---------- 2. people ----------
def photo(name, alt):
    f=root/'assets/team'/f'{name}.jpg'
    if f.exists():
        w,h=dims(str(f))
        return f'<div class="person__photo"><img src="assets/team/{name}.jpg" alt="{html.escape(alt,True)}" width="{w}" height="{h}" loading="lazy" /></div>'
    initials=''.join(x[0] for x in alt.replace('Coach ','').split()[:2]).upper()
    return f'<div class="person__photo person__photo--initials" aria-hidden="true"><span>{initials}</span></div>'

LEADERS = [
 ('rosanna','Rosanna Trigg','Owner and Founder · Competitive Specialist, High Performance Squad','A former international gymnast with three decades of coaching in the UK, Mexico and Singapore. She founded Gym With Me in 2010 and The Yard in 2016, and she still coaches the High Performance squad.'),
 ('carlos','Carlos Ojeda','Director of Men\'s Artistic Gymnastics','An NCAA national champion coach: assistant coach at Stanford through its 2026 title season, named NCAA Assistant Coach of the Year, and a FIG MAG Brevet Category 4 judge. He leads the boys\' pathway from Jurong across all six apparatus.'),
 ('vitali','Vitali Kazlou','WAG Head Technical Lead Coach, High Performance Squad','Leads the technical programme for the Women\'s Artistic squad.'),
 ('stacey','Stacey Umeh','Artistic Preparation and Choreography Specialist, High Performance Squad','Shapes the artistry and choreography of the squad\'s routines.'),
 ('maxine','Maxine Hunt','HR and Operations Director','Looks after the people who look after your children, from hiring and screening to training and development.'),
 ('tamara','Tamara Morewood','Business Development Manager','Runs business development and the day-to-day member experience across the four centres.'),
 ('katherine','Katherine Trigg','Schools Director · Safeguarding Lead and Data Protection Officer','Leads The Yard\'s work with schools, and is the person to contact on any safeguarding or personal-data matter at dpo@theyard.com.sg.'),
 ('james','James Perry','Operations Manager','Keeps the four centres running day to day.'),
]
COACHES = [
 # (file, name, roles list, centres list)
 ('claudia','Coach Claudia',['Squads Manager','Competitive Coach'],['jurong']),
 ('fatemeh','Coach Fatemeh',['Squads Manager','Competitive Coach'],['dover']),
 ('carlos','Coach Carlos',['MAG Director','MAG Coach'],['jurong']),
 ('jess','Coach Jess',['Choreographer','Recreational Coach'],['dover']),
 ('zin','Coach Zin',['MAG Coach','Recreational Coach'],['jurong','dover']),
 ('pablo','Coach Pablo',['Competitive Coach'],['jurong']),
 ('tanya','Coach Tanya',['Competitive Coach','Recreational Coach'],['bukit-timah']),
 ('juan','Coach Juan',['Competitive Coach','Recreational Coach'],['dover']),
 ('paula','Coach Paula',['Competitive Coach','Recreational Coach'],['jurong']),
 ('jane','Coach Jane',['Competitive Coach','Recreational Coach'],['dempsey']),
 ('tina','Coach Tina',['Competitive Coach','Recreational Coach'],['dempsey']),
 ('radin','Coach Radin',['Competitive Coach','Recreational Coach'],['bukit-timah']),
 ('das','Coach Das',['Branch Manager','Freestyle Coach'],['dover']),
 ('norlyn','Coach Norlyn',['Competitive Coach','Recreational Coach'],['dover']),
 ('jr','Coach JR',['MAG Coach','Ninja Coach'],['dover','dempsey']),
 ('dania','Coach Dania',['Competitive Coach','Recreational Coach'],['dover']),
 ('rasul','Coach Rasul',['Competitive Coach','Recreational Coach'],['dempsey']),
 ('abby','Coach Abby',['Competitive Coach','Recreational Coach'],['bukit-timah']),
 ('jeevann','Coach Jeevann',['Competitive Coach','Recreational Coach'],['dover']),
 ('gilbert','Coach Gilbert',['Competitive Coach','Recreational Coach'],[]),
 ('nazhim','Coach Nazhim',['Recreational Coach','Ninja Coach'],['bukit-timah']),
 ('rose','Coach Rose',['Recreational Coach'],['dover']),
 ('nash','Coach Nash',['Recreational Coach'],['dempsey']),
 ('zara','Coach Zara',['Recreational Coach'],['dempsey','bukit-timah']),
 ('hisham','Coach Hisham',['Recreational Coach'],['dempsey']),
]
CENTRE_NAME={'jurong':'Jurong','bukit-timah':'Bukit Timah','dempsey':'Dempsey','dover':'Dover'}
def role_keys(roles):
    keys=set()
    for r in roles:
        rl=r.lower()
        if 'recreational' in rl: keys.add('recreational')
        if 'competitive' in rl or 'squads' in rl: keys.add('competitive')
        if 'mag' in rl: keys.update(['mag','competitive'])
        if 'ninja' in rl: keys.add('ninja')
        if 'freestyle' in rl: keys.add('freestyle')
        if 'choreograph' in rl: keys.add('choreography')
    return ' '.join(sorted(keys))

def leader_card(file,name,role,line):
    return f'''        <article class="person" data-reveal>
          {photo(file,name)}
          <h3 class="person__name">{name}</h3>
          <p class="person__role">{role}</p>
          <p class="person__line">{line}</p>
        </article>'''
def coach_card(file,name,roles,centres):
    where=' · '.join(CENTRE_NAME[c] for c in centres) if centres else 'Across the club'
    chips=''.join(f'<span class="chip">{r}</span>' for r in roles)
    return f'''        <article class="person person--coach" data-roles="{role_keys(roles)}" data-centres="{' '.join(centres)}" data-reveal>
          {photo(file,name)}
          <h3 class="person__name">{name}</h3>
          <div class="person__chips">{chips}</div>
          <p class="person__where">{where}</p>
        </article>'''

leaders_html='\n'.join(leader_card(*l) for l in LEADERS)
coaches_html='\n'.join(coach_card(*c) for c in COACHES)

MAIN_LEADERSHIP = f'''<main id="main">

  <section class="hero hero--sub" aria-label="The Yard leadership team">
    <div class="hero__bg" aria-hidden="true"></div>
    <span class="ribbon" aria-hidden="true"></span>
    <div class="wrap">
      <div>
        <nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="leadership.html" aria-current="page">Leadership team</a></li></ol></nav>
        <span class="eyebrow gold">Leadership · Four centres · One club</span>
        <h1><span class="line"><span class="line__inner">The people who</span></span><span class="line"><span class="line__inner stroke stroke--gold">run the club</span></span></h1>
        <p class="hero__lead lead">The Yard is led by coaches. Its founder still coaches the High Performance squad, its competitive programmes are run by people who have competed and coached at international level, and its operations, schools and people teams keep four centres working to one standard.</p>
        <div class="hero__cta"><a class="btn btn--gold" href="coaches.html">Meet the coaches <span class="arr">→</span></a><a class="btn btn--ghost" href="about.html">Our story</a></div>
        <ul class="hero__facts"><li><b>Founded</b> 2016 by Rosanna Trigg</li><li><b>Coaching</b> Three decades in Singapore</li><li><b>Centres</b> Jurong · Bukit Timah · Dempsey · Dover</li></ul>
      </div>
    </div>
  </section>

  <section class="section section--paper" id="team" aria-label="Leadership team">
    <div class="wrap">
      <div class="sec-head">
        <div>
          <div class="lower3" data-reveal><i></i><span>Leadership team</span></div>
          <h2 class="h-broadcast" data-reveal>Coaches first,<br/>then everything else<span class="fin">.</span></h2>
        </div>
        <p class="sec-note" data-reveal data-delay=".1">Every decision about how a child is coached is made by someone who has coached. The rest of the team exists so that the coaching can be as good as it is at every centre, every week.</p>
      </div>
      <div class="people people--4">
{leaders_html}
      </div>
      <p class="mono" style="margin-top:1.4rem;opacity:.6" data-reveal>Roles as published by the club in September 2026. For who leads a specific squad or centre this term, the centre team is the best place to ask.</p>
    </div>
  </section>

  <section class="section section--arena bg-grid" aria-label="How the team works">
    <div class="wrap">
      <div class="sec-head">
        <div>
          <div class="lower3" data-reveal><i class="b"></i><span>One standard at four centres</span></div>
          <h2 class="h-broadcast" data-reveal>The same four pillars<br/>in every role<span class="fin">.</span></h2>
        </div>
        <p class="sec-note" data-reveal data-delay=".1">Move, play, belong and grow are written on the wall of every centre, and they apply to the front desk and the leadership team as much as to the floor.</p>
      </div>
      <div class="benefits benefits--4">
        <div class="benefit" data-reveal><svg class="icon"><use href="assets/icons.svg#bolt"/></svg><h4>Move</h4><p>Learning through motion, building your strength. Plans are cheap, and the team learns by running the class, the event or the change and looking honestly at what happened.</p></div>
        <div class="benefit" data-reveal data-delay=".08"><svg class="icon"><use href="assets/icons.svg#spark"/></svg><h4>Play</h4><p>Fueled with fun, designed for progress. The energy in a centre is something every member of staff produces, from the greeting at reception to the last rotation.</p></div>
        <div class="benefit" data-reveal data-delay=".16"><svg class="icon"><use href="assets/icons.svg#heart"/></svg><h4>Belong</h4><p>Individual journeys, unique pathways, one community. Families who train here are members of a club, known by name, and the team is one club across four centres.</p></div>
        <div class="benefit" data-reveal data-delay=".24"><svg class="icon"><use href="assets/icons.svg#podium"/></svg><h4>Grow</h4><p>Developing character, skills for life. The club grows people the way it grows athletes: honest feedback, clear standards and credit for effort.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--gold bg-grid--ink book-cta" id="book" aria-label="Talk to the team">
    <img class="book-cta__char" src="assets/illustrations/char-gold.png" alt="" aria-hidden="true" width="240" height="240" loading="lazy" />
    <div class="wrap" style="position:relative;z-index:1">
      <span class="eyebrow" style="color:var(--ink-3)" data-reveal>Talk to us</span>
      <h2 class="hugeline" data-reveal>Come and <span class="stroke stroke--ink">meet</span> the team.</h2>
      <p class="lead" data-reveal data-delay=".08">The quickest way to meet the people on this page is to book a trial at your nearest centre and watch a class. For schools, corporate and partnership conversations, one email reaches the right person.</p>
      <div class="btn-row" data-reveal data-delay=".14">
        <a class="btn btn--ink btn--lg" href="#find" data-finder data-magnetic>Book a trial <span class="arr">→</span></a>
        <a class="btn btn--ghost-ink" href="mailto:enquiries@theyard.com.sg">enquiries@theyard.com.sg</a>
        <a class="btn btn--wa" href="https://wa.me/6580891440" data-wa="main"><svg class="ico"><use href="assets/icons.svg#whatsapp"/></svg> WhatsApp the main line</a>
      </div>
    </div>
  </section>

  <section class="section section--arena" aria-label="Keep exploring">
    <div class="wrap">
      <span class="eyebrow gold" data-reveal>Keep exploring</span>
      <div class="next-links" style="margin-top:1rem">
        <a class="next-link" href="coaches.html" data-reveal><span class="mono">On the floor</span><b>Our coaches</b><span>Every coach at The Yard, with their discipline and centre.</span></a>
        <a class="next-link" href="about.html" data-reveal data-delay=".08"><span class="mono">Our story</span><b>About The Yard</b><span>The founder, the four pillars and how we think about progress.</span></a>
        <a class="next-link" href="competitive.html" data-reveal data-delay=".16"><span class="mono">The summit</span><b>Competitive WAG and MAG</b><span>How selection works and where the squads train.</span></a>
      </div>
    </div>
  </section>

  </main>'''

MAIN_COACHES = f'''<main id="main">

  <section class="hero hero--sub" aria-label="The Yard coaches">
    <div class="hero__bg" aria-hidden="true"></div>
    <span class="ribbon" aria-hidden="true"></span>
    <div class="wrap">
      <div>
        <nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="coaches.html" aria-current="page">Our coaches</a></li></ol></nav>
        <span class="eyebrow gold">Coaches · All four centres · All ages and abilities</span>
        <h1><span class="line"><span class="line__inner">The coaches your</span></span><span class="line"><span class="line__inner stroke stroke--gold">child will know by name</span></span></h1>
        <p class="hero__lead lead">The Yard's coaches come from around the world and from Singapore, many with international competitive backgrounds across USAG, FIG and SGLP programmes, and every one of them is interviewed, reference-checked and screened before they set foot on the floor. Here is who you will meet.</p>
        <div class="hero__cta"><a class="btn btn--gold" href="#coaches">See the coaches <span class="arr">→</span></a><a class="btn btn--ghost" href="leadership.html">Leadership team</a></div>
        <ul class="hero__facts"><li><b>Ratio</b> 1 coach to 8 children, 1 to 6 in KinderTots</li><li><b>Screening</b> Interview, two references, checks</li><li><b>Training</b> First aid and safeguarding on induction</li></ul>
      </div>
    </div>
  </section>

  <section class="section section--paper" id="coaches" aria-label="Meet the coaches">
    <div class="wrap" data-filter-root>
      <div class="sec-head">
        <div>
          <div class="lower3" data-reveal><i></i><span>Meet the coaches</span></div>
          <h2 class="h-broadcast" data-reveal>Twenty-five coaches,<br/>one way of coaching<span class="fin">.</span></h2>
        </div>
        <p class="sec-note" data-reveal data-delay=".1">Filter by what your child does or by your nearest centre. Coach assignments change with the term, so the centre team can confirm who takes a particular class.</p>
      </div>
      <div class="filters" data-reveal>
        <div class="filters__row" role="group" aria-label="Filter by discipline">
          <button class="pill" type="button" data-filter="role" data-value="all" aria-pressed="true">All</button>
          <button class="pill" type="button" data-filter="role" data-value="recreational" aria-pressed="false">Recreational</button>
          <button class="pill" type="button" data-filter="role" data-value="competitive" aria-pressed="false">Competitive</button>
          <button class="pill" type="button" data-filter="role" data-value="mag" aria-pressed="false">MAG</button>
          <button class="pill" type="button" data-filter="role" data-value="ninja" aria-pressed="false">Ninja</button>
          <button class="pill" type="button" data-filter="role" data-value="freestyle" aria-pressed="false">Freestyle</button>
          <button class="pill" type="button" data-filter="role" data-value="choreography" aria-pressed="false">Choreography</button>
        </div>
        <div class="filters__row" role="group" aria-label="Filter by centre">
          <button class="pill" type="button" data-filter="centre" data-value="all" aria-pressed="true">Every centre</button>
          <button class="pill" type="button" data-filter="centre" data-value="jurong" aria-pressed="false">Jurong</button>
          <button class="pill" type="button" data-filter="centre" data-value="bukit-timah" aria-pressed="false">Bukit Timah</button>
          <button class="pill" type="button" data-filter="centre" data-value="dempsey" aria-pressed="false">Dempsey</button>
          <button class="pill" type="button" data-filter="centre" data-value="dover" aria-pressed="false">Dover</button>
        </div>
        <p class="mono filters__count" aria-live="polite"><span data-filter-count>{len(COACHES)} coaches</span></p>
      </div>
      <div class="people people--5">
{coaches_html}
      </div>
      <p class="mono" style="margin-top:1.4rem;opacity:.6" data-reveal>Roster as published by the club in September 2026. Centres shown are where each coach appears on the class timetable.</p>
    </div>
  </section>

  <section class="section section--arena bg-grid" aria-label="What every coach shares">
    <div class="wrap">
      <div class="sec-head">
        <div>
          <div class="lower3" data-reveal><i class="r"></i><span>The standard</span></div>
          <h2 class="h-broadcast" data-reveal>What every Yard coach<br/>has in common<span class="fin">.</span></h2>
        </div>
        <p class="sec-note" data-reveal data-delay=".1">Coaches disagree about progressions in the coaches' room, and on the floor your child hears one plan. That is possible because every coach trains on the same standard.</p>
      </div>
      <div class="benefits benefits--4">
        <div class="benefit" data-reveal><svg class="icon"><use href="assets/icons.svg#shield"/></svg><h4>Screened before day one</h4><p>Face-to-face interview with safety-focused questions, two professional references, identity, criminal record and working-with-children checks, and qualification verification.</p></div>
        <div class="benefit" data-reveal data-delay=".08"><svg class="icon"><use href="assets/icons.svg#check"/></svg><h4>Qualified for the apparatus</h4><p>Coaching qualifications appropriate to the apparatus and level taught, current first-aid certification, and safeguarding training on induction with ongoing workshops.</p></div>
        <div class="benefit" data-reveal data-delay=".16"><svg class="icon"><use href="assets/icons.svg#eye"/></svg><h4>Always on the floor</h4><p>Every recreational and competitive class is supervised on the floor by a qualified coach, and the adult Open Session always has a coach present.</p></div>
        <div class="benefit" data-reveal data-delay=".24"><svg class="icon"><use href="assets/icons.svg#medal"/></svg><h4>Progress is the promise</h4><p>Foundations before sophistication, small steps compounded, and a coach who calls every level move when the skills are reliably there.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--gold bg-grid--ink book-cta" id="book" aria-label="Book a trial class">
    <img class="book-cta__char" src="assets/illustrations/char-gold.png" alt="" aria-hidden="true" width="240" height="240" loading="lazy" />
    <div class="wrap" style="position:relative;z-index:1">
      <span class="eyebrow" style="color:var(--ink-3)" data-reveal>Ready when you are</span>
      <h2 class="hugeline" data-reveal>Meet your coach at a <span class="stroke stroke--ink">trial</span>.</h2>
      <p class="lead" data-reveal data-delay=".08">Book a trial at your nearest centre and watch a class from the viewing area. The coach recommends a level during the trial, and the fee is shown at booking.</p>
      <div class="centres-cta" data-reveal data-delay=".14">
        <a class="centre-cta" href="https://book.jurong.theyard.sg/" data-book="jurong" data-magnetic><b>Jurong</b><span>Perennial Business City</span><span class="go">Book online <span class="arr">↗</span></span></a>
        <a class="centre-cta" href="https://book.bukittimah.theyard.sg/" data-book="bt" data-magnetic><b>Bukit Timah</b><span>KAP Mall</span><span class="go">Book online <span class="arr">↗</span></span></a>
        <a class="centre-cta" href="https://book.dempsey.theyard.sg/" data-book="dempsey" data-magnetic><b>Dempsey</b><span>Dempsey Hill</span><span class="go">Book online <span class="arr">↗</span></span></a>
        <a class="centre-cta" href="https://book.dover.theyard.sg/" data-book="dover" data-magnetic><b>Dover</b><span>SPGG</span><span class="go">Book online <span class="arr">↗</span></span></a>
      </div>
      <div class="btn-row" data-reveal data-delay=".18" style="margin-top:1.2rem">
        <a class="btn btn--wa" href="https://wa.me/6580891440" data-wa="main"><svg class="ico"><use href="assets/icons.svg#whatsapp"/></svg> WhatsApp the main line</a>
      </div>
    </div>
  </section>

  <section class="section section--arena" aria-label="Keep exploring">
    <div class="wrap">
      <span class="eyebrow gold" data-reveal>Keep exploring</span>
      <div class="next-links" style="margin-top:1rem">
        <a class="next-link" href="leadership.html" data-reveal><span class="mono">Who runs the club</span><b>Leadership team</b><span>The founder, the competitive directors and the operations team.</span></a>
        <a class="next-link" href="recreational.html" data-reveal data-delay=".08"><span class="mono">Where everyone starts</span><b>Recreational gymnastics</b><span>Gym Tots to Legends at all four centres.</span></a>
        <a class="next-link" href="locations.html" data-reveal data-delay=".16"><span class="mono">Find your centre</span><b>Four centres</b><span>Programmes, contacts and directions for each one.</span></a>
      </div>
    </div>
  </section>

  </main>'''

def build(fname, title, desc, bodyclass, main, ld):
    s=(root/'index.html').read_text()
    s=re.sub(r'<title>.*?</title>', f'<title>{title}</title>', s, count=1)
    s=re.sub(r'<meta name="description" content="[^"]*" />', f'<meta name="description" content="{html.escape(desc,True)}" />', s, count=1)
    s=s.replace('<link rel="canonical" href="https://www.theyard.sg/" />', f'<link rel="canonical" href="https://www.theyard.sg/{fname}" />')
    s=re.sub(r'<meta property="og:title" content="[^"]*" />', f'<meta property="og:title" content="{title}" />', s)
    s=re.sub(r'<meta property="og:description" content="[^"]*" />', f'<meta property="og:description" content="{html.escape(desc,True)}" />', s)
    s=s.replace('<meta property="og:url" content="https://www.theyard.sg/" />', f'<meta property="og:url" content="https://www.theyard.sg/{fname}" />')
    s=re.sub(r'<meta name="twitter:title" content="[^"]*" />', f'<meta name="twitter:title" content="{title}" />', s)
    s=re.sub(r'<meta name="twitter:description" content="[^"]*" />', f'<meta name="twitter:description" content="{html.escape(desc,True)}" />', s)
    # replace all JSON-LD blocks with the page's
    s=re.sub(r'\n  <!-- ================= Structured data.*?</script>\n(?:  <script type="application/ld\+json">.*?</script>\n)*', '\n  <script type="application/ld+json">\n  '+json.dumps(ld, ensure_ascii=False)+'\n  </script>\n', s, count=1, flags=re.S)
    s=re.sub(r'<body class="page-home">', f'<body class="{bodyclass}">', s)
    s=re.sub(r'<main id="main">.*?</main>', main, s, count=1, flags=re.S)
    (root/fname).write_text(s)
    print('built', fname, len(s))

crumbs=lambda name,f: {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.theyard.sg/"},{"@type":"ListItem","position":2,"name":"About","item":"https://www.theyard.sg/about.html"},{"@type":"ListItem","position":3,"name":name,"item":f"https://www.theyard.sg/{f}"}]}
ld_lead={"@context":"https://schema.org","@graph":[crumbs("Leadership team","leadership.html"),{"@type":"Organization","@id":"https://www.theyard.sg/#organization","name":"The Yard","employee":[{"@type":"Person","name":n,"jobTitle":r.replace(' · ',', ')} for _,n,r,_ in LEADERS]}]}
ld_coach={"@context":"https://schema.org","@graph":[crumbs("Our coaches","coaches.html"),{"@type":"ItemList","name":"The Yard coaches","itemListElement":[{"@type":"ListItem","position":i+1,"item":{"@type":"Person","name":n,"jobTitle":', '.join(r)}} for i,(_,n,r,_) in enumerate(COACHES)]}]}
build('leadership.html','Leadership Team | The Yard Singapore','Meet the people who lead The Yard: founder Rosanna Trigg, the competitive programme directors and the operations, schools and people team behind four gymnastics centres in Singapore.','page-leadership',MAIN_LEADERSHIP,ld_lead)
build('coaches.html','Our Coaches | The Yard Singapore','Every coach at The Yard, with their discipline and centre. Screened, qualified and safeguarding-trained coaches for recreational, competitive, MAG, ninja and freestyle gymnastics across four Singapore centres.','page-coaches',MAIN_COACHES,ld_coach)

# ---------- 3. css ----------
c=root/'css/styles.css'; t=c.read_text()
if '.people {' not in t:
    t=t.rstrip('\n')+"""
/* people grids (leadership + coaches) */
.people { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--gap); }
.people--5 { grid-template-columns: repeat(5, 1fr); }
@media (max-width: 1100px) { .people--5 { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 900px) { .people, .people--5 { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .people, .people--5 { grid-template-columns: repeat(2, 1fr); gap: .8rem; } }
.person { background: var(--white); border: 1px solid var(--hairline-l); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; transition: transform .3s var(--ease-out), box-shadow .3s; }
.person:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.person__photo { aspect-ratio: 4 / 5; background: var(--mist); overflow: hidden; position: relative; }
.person__photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 18%; display: block; }
.person__photo--initials { display: grid; place-items: center; background: linear-gradient(160deg, #0b2c4f, var(--ink-2)); color: var(--gold); font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3.2rem); }
.person__name { font-size: clamp(1.05rem, .95rem + .5vw, 1.35rem); margin: .9rem 1rem .2rem; }
.person__role { margin: 0 1rem .5rem; font-family: var(--font-mono); font-size: .62rem; letter-spacing: .1em; text-transform: uppercase; color: var(--blue-deep); line-height: 1.5; }
.person__line { margin: 0 1rem 1.1rem; font-size: .88rem; opacity: .85; }
.person__chips { display: flex; flex-wrap: wrap; gap: .3rem; margin: 0 1rem .5rem; }
.person__chips .chip { color: var(--ink-3); border-color: rgba(25,28,31,.25); font-size: .58rem; }
.person__where { margin: 0 1rem 1rem; font-family: var(--font-mono); font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; opacity: .6; }
.person[hidden] { display: none; }
.filters { display: flex; flex-direction: column; gap: .6rem; margin-bottom: 1.6rem; }
.filters__row { display: flex; flex-wrap: wrap; gap: .4rem; }
.filters__count { margin: .2rem 0 0; opacity: .6; }
.pill { font-family: var(--font-mono); font-size: .64rem; letter-spacing: .1em; text-transform: uppercase; border: 1.5px solid rgba(25,28,31,.3); background: var(--white); color: var(--ink-3); border-radius: 999px; padding: .5rem .9rem .42rem; cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
.pill:hover { border-color: var(--ink-3); }
.pill[aria-pressed="true"] { background: var(--ink-3); color: var(--gold); border-color: var(--ink-3); }
"""
    c.write_text(t); print('css ok')

# ---------- 4. js filter ----------
j=root/'js/main.js'; t=j.read_text()
if 'data-filter-root' not in t:
    t=t.replace("  /* ================= footer year ================= */", """  /* ================= 9. Simple filters (coaches page) ================= */
  document.querySelectorAll('[data-filter-root]').forEach(function (rootEl) {
    var items = Array.prototype.slice.call(rootEl.querySelectorAll('[data-roles]'));
    var state = { role: 'all', centre: 'all' };
    var has = function (el, attr, val) { return val === 'all' || (' ' + (el.getAttribute(attr) || '') + ' ').indexOf(' ' + val + ' ') > -1; };
    var apply = function () {
      var n = 0;
      items.forEach(function (el) { var show = has(el, 'data-roles', state.role) && has(el, 'data-centres', state.centre); el.hidden = !show; if (show) { n++; } });
      var out = rootEl.querySelector('[data-filter-count]');
      if (out) { out.textContent = n + (n === 1 ? ' coach' : ' coaches'); }
    };
    rootEl.querySelectorAll('[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var kind = btn.getAttribute('data-filter'); state[kind] = btn.getAttribute('data-value');
        rootEl.querySelectorAll('[data-filter="' + kind + '"]').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        apply();
      });
    });
  });

  /* ================= footer year ================= */""")
    t=t.replace("   8. Class finder (inline section + <dialog>)\n", "   8. Class finder (inline section + <dialog>)\n   9. Simple filters (coaches page)\n")
    j.write_text(t); print('js ok')

# ---------- 5. sitemap + llms ----------
sm=root/'sitemap.xml'; s=sm.read_text()
if 'leadership.html' not in s:
    s=s.replace('  <url><loc>https://www.theyard.sg/about.html</loc>', '  <url><loc>https://www.theyard.sg/leadership.html</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>\n  <url><loc>https://www.theyard.sg/coaches.html</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>\n  <url><loc>https://www.theyard.sg/about.html</loc>')
    sm.write_text(s)
l=root/'llms.txt'; s=l.read_text()
s=s.replace("- About: [Our story](https://www.theyard.sg/about.html) · [Why gymnastics](https://www.theyard.sg/why-gymnastics.html) · [Contact](https://www.theyard.sg/contact.html)",
            "- About: [Our story](https://www.theyard.sg/about.html) · [Leadership team](https://www.theyard.sg/leadership.html) · [Our coaches](https://www.theyard.sg/coaches.html) · [Why gymnastics](https://www.theyard.sg/why-gymnastics.html) · [Contact](https://www.theyard.sg/contact.html)")
l.write_text(s); print('sitemap + llms ok')
