# EN → TH Translations (Review)

## Conventions

**🔒 Keep in English (ทับศัพท์)**: Agentic AI, AI, AI agent, AI coding agent, OpenBridge, Enabridge, LINE, YouTube, LinkedIn, POS, API, KYC, KYB, Travel Rule, FATF, Sumsub, Nginx, ROI, SLA, first-mover, onboarding, pipeline, workflow (บางจุด)

**⚠️** = ให้เลือก
**✅** = แปลตามที่เสนอเลย

---

## 1. Global UI

### 1.1 BrandLogo (subtitle)
- `Build · Teach · Consult` → **⚠️ เลือก:**
  - (a) `สร้าง · สอน · ที่ปรึกษา`
  - (b) `พัฒนา · อบรม · ให้คำปรึกษา`
  - (c) `Build · Teach · Consult` (ทับศัพท์เลย — สั้น punchy)

### 1.2 Navbar (src/data/navigation.ts)
- ✅ `Services` → `บริการ`
- ✅ `Custom Development` → `พัฒนาซอฟต์แวร์ตามสั่ง`
- ✅ `AI Training` → `อบรม AI`
- ✅ `AI Consulting` → `ที่ปรึกษา AI`
- ⚠️ `Case Studies` → (a) `ผลงานที่ผ่านมา` หรือ (b) `เคสลูกค้า` หรือ (c) `Case Studies` (ทับศัพท์)
- ⚠️ `How We Work` → (a) `วิธีการทำงาน` หรือ (b) `ขั้นตอนการทำงาน`
- ✅ `Company` → `เกี่ยวกับเรา`
- ✅ `Contact Us` → `ติดต่อเรา`

### 1.3 Footer tagline
- `We build software with AI, teach organizations to use AI, and are building our own AI product.`
  → ✅ `เราสร้างซอฟต์แวร์ด้วย AI อบรมให้องค์กรใช้ AI และกำลังพัฒนา AI product ของเราเอง`

### 1.4 CTABanner (default)
- `Let's talk about what you need.`
  → ✅ `มาคุยกันว่าคุณต้องการอะไร`
- `Reach out on LINE, call us, or send an email. No forms, no booking widgets — just a conversation.`
  → ✅ `ติดต่อเราได้ทาง LINE โทร หรืออีเมล ไม่มีฟอร์ม ไม่มี widget นัดหมาย แค่คุยกันจริง ๆ`

### 1.5 FloatingLineButton
- `Chat on LINE` → ✅ `แชททาง LINE`

---

## 2. Home Page (/)

### 2.1 Hero
- Label `Build · Teach · Consult` → (ดูข้อ 1.1)
- Title `We build software with AI, teach organizations to use it, and are building our own AI product.`
  → ⚠️ เลือก:
  - (a) `เราสร้างซอฟต์แวร์ด้วย AI สอนองค์กรให้ใช้ AI เป็น และกำลังพัฒนา AI product ของตัวเอง`
  - (b) `เราพัฒนาซอฟต์แวร์ด้วย AI ถ่ายทอดความรู้เรื่อง AI ให้องค์กร และสร้างผลิตภัณฑ์ AI ของเราเอง`
- Description
  → ✅ `Enabridge คือทีมในกรุงเทพฯ ที่ส่งมอบระบบ production ได้เร็วด้วย AI coding agent อบรมการใช้ AI ให้องค์กร และกำลังพัฒนา OpenBridge — แพลตฟอร์ม Agentic AI ของเราเอง`
- CTA `See what we've built` → ✅ `ดูผลงานของเรา`
- CTA `Contact us` → ✅ `ติดต่อเรา`

### 2.2 Trust chips (trustChips)
- ✅ `AI-powered development` → `พัฒนาซอฟต์แวร์ด้วย AI`
- ✅ `3 production systems shipped` → `ส่งมอบ 3 ระบบ production แล้ว`
- ✅ `Corporate AI training` → `อบรม AI ให้องค์กร`
- ✅ `Building OpenBridge` → `กำลังสร้าง OpenBridge`

### 2.3 "What we do"
- Label `What we do` → ✅ `สิ่งที่เราทำ`
- Title `Three things we actually do.` → ✅ `สามสิ่งที่เราทำจริง`

### 2.4 "Shipped and running" (case studies)
- Label `Shipped and running` → ⚠️ (a) `ส่งมอบแล้วและใช้งานจริง` (b) `ขึ้นระบบแล้ว`
- Title `Real systems built with AI coding agents.` → ✅ `ระบบจริงที่สร้างด้วย AI coding agent`
- Subtitle `Every project below was delivered by a small team using AI-assisted development. Speed and quality, not one or the other.`
  → ✅ `ทุกโปรเจกต์ด้านล่างส่งมอบโดยทีมเล็ก ๆ ที่ใช้ AI ช่วยพัฒนา ได้ทั้งความเร็วและคุณภาพ ไม่ต้องเลือกอย่างใดอย่างหนึ่ง`

### 2.5 "Training track record"
- Label `Training track record` → ✅ `ประวัติการอบรม`
- Title `Organizations we've trained on AI.` → ✅ `องค์กรที่เราเคยอบรม AI ให้`
- Subtitle `We teach what we practice — from government agencies to institutes and private companies.`
  → ✅ `เราสอนในสิ่งที่เราใช้จริง — ตั้งแต่หน่วยงานภาครัฐ ไปจนถึงสถาบันและบริษัทเอกชน`

### 2.6 "OpenBridge teaser"
- Label `Coming soon` → ✅ `เร็ว ๆ นี้`
- Title `OpenBridge — Agentic AI built from real delivery experience.`
  → ⚠️ (a) `OpenBridge — Agentic AI ที่สร้างจากประสบการณ์ส่งมอบงานจริง`
  - (b) `OpenBridge — Agentic AI จากทีมที่ส่งของจริง`
- Subtitle `We're building an Agentic AI platform grounded in what we've learned from shipping real systems. Not theory — patterns from production.`
  → ✅ `เรากำลังสร้างแพลตฟอร์ม Agentic AI ที่มาจากบทเรียนของการส่งมอบระบบจริง ไม่ใช่ทฤษฎี แต่เป็น pattern จากของจริง`
- Button `Learn more about OpenBridge` → ✅ `อ่านเพิ่มเติมเรื่อง OpenBridge`

### 2.7 "Why Enabridge" (whyEnabridge)
- Label `Why Enabridge` → ✅ `ทำไมต้อง Enabridge`
- Title `What makes us different.` → ✅ `เราต่างจากคนอื่นอย่างไร`

**Items:**
- `We ship real software, fast` → ✅ `เราส่งมอบซอฟต์แวร์จริง ได้เร็ว`
  - `AI coding agents let us deliver production systems in weeks, not months. Our case studies prove it.`
  → ✅ `AI coding agent ทำให้เราส่งระบบ production ได้ในเวลาสัปดาห์ ไม่ใช่เดือน มีเคสจริงพิสูจน์`
- `We teach what we practice` → ✅ `เราสอนในสิ่งที่เราทำจริง`
  - `Training programs delivered at government agencies like the Central Investigation Bureau (CIB) and Thai Immigration Bureau, the MAKE institute, and private companies.`
  → ✅ `จัดอบรมให้หน่วยงานภาครัฐ เช่น กองบัญชาการตำรวจสอบสวนกลาง (CIB) และสำนักงานตรวจคนเข้าเมือง สถาบัน MAKE และบริษัทเอกชน`
- `Assessment before action` → ✅ `ประเมินก่อนลงมือ`
  - `We evaluate where your organization is with AI before recommending anything. No premature solutions.`
  → ✅ `เราประเมินสถานะ AI ขององค์กรก่อนเสนออะไรทั้งนั้น ไม่มีโซลูชันสำเร็จรูปยัดเยียด`
- `Building our own AI product` → ✅ `เรากำลังสร้าง product AI ของตัวเอง`
  - `OpenBridge is our Agentic AI platform — built from real delivery experience, not theory.`
  → ✅ `OpenBridge คือแพลตฟอร์ม Agentic AI ของเรา — สร้างจากประสบการณ์จริง ไม่ใช่ทฤษฎี`

---

## 3. Services

### 3.1 Services landing (/services)
- Hero label `Services` → `บริการ`
- Title `We build, we teach, we consult.` → ✅ `เราสร้าง เราสอน เราให้คำปรึกษา`
- Description `Three things we actually do — backed by shipped projects and training credentials.`
  → ✅ `สามสิ่งที่เราทำจริง — พร้อมผลงานที่ส่งมอบและประวัติการอบรม`

### 3.2 Custom Software Development
- Title → ✅ `พัฒนาซอฟต์แวร์ตามสั่ง` (Custom Software Development)
- Tagline → ✅ `แอปพลิเคชัน production-grade ที่สร้างได้เร็วด้วย AI coding agent ทั้งเว็บ มือถือ API และแพลตฟอร์มครบวงจร`
- Highlights:
  - ✅ `ใช้ AI ช่วยพัฒนาให้ส่งงานเร็วขึ้น โดยไม่ลดคุณภาพ`
  - ✅ `Full-stack: React, Next.js, มือถือ, API, infrastructure`
  - ✅ `Production-grade ตั้งแต่วันแรก — ไม่ใช่แค่ต้นแบบ`
  - ✅ `3 ระบบที่ส่งมอบและมีผู้ใช้จริง (ดู Case Studies)`

### 3.3 AI Training & Education
- Title → ✅ `อบรม AI`
- Tagline → ✅ `โปรแกรมอบรม hands-on ที่สอนทีมของคุณให้เข้าใจและใช้ AI ได้อย่างมีประสิทธิภาพ`
- Highlights:
  - ✅ `ส่งมอบให้ CIB, สำนักงานตรวจคนเข้าเมือง และสถาบัน MAKE`
  - ✅ `อบรมให้บริษัทเอกชน เช่น TopCooling`
  - ✅ `มีช่อง YouTube (@AgenticLab) เผยแพร่ความรู้เรื่อง AI`
  - ✅ `ปรับให้เหมาะกับระดับความรู้และเป้าหมายของทีมคุณ`

### 3.4 AI Consulting & Assessment
- Title → ✅ `ที่ปรึกษา AI`
- Tagline → ✅ `เริ่มจากการประเมิน: เราจะดูว่า AI ช่วยองค์กรของคุณได้จริงตรงไหน ก่อนเสนอโซลูชัน`
- Highlights:
  - ✅ `ประเมินความพร้อม AI ขององค์กร`
  - ✅ `วิเคราะห์ workflow เพื่อหาโอกาสในการ automate ที่เป็นไปได้จริง`
  - ✅ `ออกแบบ agentic workflow ตามความต้องการ (ถ้าเหมาะสม)`
  - ✅ `ประเมินอย่างตรงไปตรงมา — ถ้ายังไม่พร้อม เราก็จะบอก`

### 3.5 Service detail heading
- `What we deliver` → ✅ `สิ่งที่เราส่งมอบ`
- `How this works` → ✅ `การทำงาน`
- CTA `Interested in {service}?` → ✅ `สนใจ{บริการ}ไหม?`

---

## 4. Case Studies (/case-studies)

### 4.1 Landing
- Hero title `Real systems, built fast with AI coding agents.`
  → ✅ `ระบบจริง ส่งได้เร็ว ด้วย AI coding agent`
- Description `Every project below was delivered by a small team using AI-assisted development. These aren't demos — they're production systems with real users.`
  → ✅ `ทุกโปรเจกต์ด้านล่างส่งมอบโดยทีมเล็ก ๆ ที่ใช้ AI ช่วยพัฒนา ไม่ใช่ demo แต่เป็นระบบ production ที่มีผู้ใช้จริง`
- CTA `Have a project in mind?` → ✅ `มีโปรเจกต์ในใจไหม?`

### 4.2 Case studies (caseStudies)

**E-Coupon / POS Ecosystem**
- Tagline → ✅ `แพลตฟอร์ม coupon และ POS แบบ full-stack ส่งมอบใน 1 เดือน`
- AI story → ✅ `สร้างใน 1 เดือน โดยใช้ AI coding agent อย่างเข้มข้น`
- Stats:
  - `POS mobile app` → ✅ `แอป POS มือถือ`
  - `Web apps` → ✅ `เว็บแอป`
  - `Daily active users` → ✅ `ผู้ใช้งานต่อวัน`
  - `Delivery` → ✅ `ระยะเวลาส่งมอบ`
- Details:
  - ✅ `สร้างแอป POS มือถือเต็มรูปแบบสำหรับร้านค้าในการออกและใช้ digital coupon`
  - ✅ `พัฒนาเว็บแอป 2 ตัว — ตัวหนึ่งสำหรับจัดการแคมเปญ อีกตัวสำหรับ dashboard วิเคราะห์ข้อมูล`
  - ✅ `วาง backend API layer พร้อม Nginx gateway จัดการ authentication, rate limiting และ routing`
  - ✅ `มีผู้ใช้งานต่อวันมากกว่า 1,000 คนภายในเดือนแรกของการเปิดตัว`

**Blockchain Compliance (Travel Rule)**
- Tagline → ✅ `ระบบ compliance สำหรับธุรกรรมคริปโต พร้อม KYC ในตัว`
- AI story → ✅ `ส่งมอบใน 2 เดือน ด้วย AI ช่วยพัฒนา`
- Stats:
  - `Compliance logic` → ✅ `ตรรกะการกำกับ`
  - `KYC provider` → 🔒 `KYC provider`
- Details:
  - ✅ `ออกแบบและสร้างตรรกะ compliance ตามข้อกำหนด FATF Travel Rule สำหรับการโอนสินทรัพย์ดิจิทัล`
  - ✅ `เชื่อมต่อ Sumsub สำหรับ KYC อัตโนมัติเป็นส่วนหนึ่งของ transaction flow`
  - ✅ `สร้าง rules engine ประเมินความเสี่ยงแบบ real-time และ route ธุรกรรมที่ต้องสงสัยไปให้คนตรวจ`
  - ✅ `ส่งมอบ infrastructure compliance พร้อมใช้งาน production ใน 2 เดือน`

**E-Wallet System**
- Tagline → ✅ `แพลตฟอร์ม e-wallet พร้อมระบบ onboard พาร์ทเนอร์ และ payout ผ่านธนาคาร`
- AI story → ✅ `ส่งมอบใน 4 เดือนโดยทีมเล็ก ๆ ที่ใช้ AI coding agent`
- Stats:
  - `Partner onboarding` → ✅ `Onboard พาร์ทเนอร์`
  - `Bank payout gateway` → ✅ `Gateway ธนาคาร`
- Details:
  - ✅ `สร้างระบบ e-wallet ครบวงจร รองรับการเติมเงิน โอนระหว่างผู้ใช้ และจ่ายเงินให้ร้านค้า`
  - ✅ `พัฒนา workflow onboard พาร์ทเนอร์แบบอัตโนมัติ รวมถึง KYB และการจัดการสัญญา`
  - ✅ `เชื่อมต่อ gateway ธนาคารสำหรับจ่ายเงินไปยังบัญชีพาร์ทเนอร์แบบ real-time`
  - ✅ `ส่งมอบแพลตฟอร์มครบใน 4 เดือน พร้อม audit trail และระบบ monitor ธุรกรรม`

### 4.3 Case study detail
- `What we delivered` → ✅ `สิ่งที่เราส่งมอบ`
- CTA `Want results like these?` → ✅ `อยากได้ผลลัพธ์แบบนี้บ้างไหม?`

---

## 5. How We Work (/how-we-work)

### 5.1 Hero
- Title `Assessment first. Then build, teach, or consult.`
  → ⚠️ (a) `เริ่มจากการประเมิน แล้วค่อยสร้าง สอน หรือให้คำปรึกษา`
  - (b) `ประเมินก่อน แล้วเลือกว่าจะสร้าง สอน หรือให้คำปรึกษา`
- Description `We start by understanding where you are. Then we recommend what makes sense — whether that's building something, training your team, or designing an AI strategy.`
  → ✅ `เราเริ่มจากการเข้าใจว่าคุณอยู่จุดไหน แล้วจึงแนะนำสิ่งที่เหมาะสม — ไม่ว่าจะเป็นการสร้างบางอย่าง อบรมทีม หรือออกแบบกลยุทธ์ AI`

### 5.2 Delivery phases
- Phase 1 `AI Readiness Assessment` / `1–2 weeks`
  → ✅ `ประเมินความพร้อม AI` / `1–2 สัปดาห์`
  - ✅ `จัดทำแผนผัง workflow ปัจจุบัน`
  - ✅ `ระบุโอกาสในการนำ AI มาใช้`
  - ✅ `ประเมินความพร้อมของทีม`
  - ✅ `รายงานคำแนะนำพร้อมการประเมินที่ตรงไปตรงมา`
- Phase 2 `Build or Train` / `2–8 weeks`
  → ✅ `สร้างหรืออบรม` / `2–8 สัปดาห์`
  - ✅ `พัฒนาซอฟต์แวร์ตามสั่งด้วย AI coding agent`
  - ✅ `โปรแกรมอบรม AI สำหรับทีมของคุณ`
  - ✅ `ออกแบบ agentic workflow ตามความต้องการ (ถ้าเหมาะสม)`
  - ✅ `ส่งมอบแบบ iterative พร้อม demo เป็นระยะ`
- Phase 3 `Support & Scale` / `Ongoing`
  → ✅ `สนับสนุนและขยายผล` / `ต่อเนื่อง`
  - ✅ `Support production พร้อม monitoring`
  - ✅ `อบรมทบทวนและ workshop ความสามารถใหม่ ๆ`
  - ✅ `ระบุ workflow ใหม่ที่น่าลงมือ`

### 5.3 Training credentials section
- Label `Training track record` → ✅ `ประวัติการอบรม`
- Title `Organizations we've trained on AI` → ✅ `องค์กรที่เราเคยอบรม AI ให้`
- Description → ✅ `เราเชื่อว่าการนำ AI มาใช้ต้องเริ่มจากความเข้าใจ ก่อนจะสร้างอะไร เราทำให้ทีมของคุณเข้าใจก่อนว่า AI ทำอะไรได้และทำอะไรไม่ได้ นั่นคือเหตุผลที่การศึกษาเป็นหัวใจของทุกงานที่เราส่งมอบ`

### 5.4 Training credentials list (trainingCredentials)
- `Central Investigation Bureau (CIB)` → ✅ `กองบัญชาการตำรวจสอบสวนกลาง (CIB)` / type `หน่วยงานภาครัฐ`
- `Thai Immigration Bureau` → ✅ `สำนักงานตรวจคนเข้าเมือง` / type `หน่วยงานภาครัฐ`
- `MAKE Institute` → ✅ `สถาบัน MAKE` / type `สถาบันการศึกษา`
- `TopCooling` → ✅ `TopCooling` / type `บริษัทเอกชน`
- `YouTube Channel` → ✅ `ช่อง YouTube` / type `เผยแพร่สาธารณะ`

### 5.5 Education philosophy
- Label `Our approach` → ✅ `แนวทางของเรา`
- Title `Understanding first, then tools` → ✅ `เข้าใจก่อน ค่อยลงมือใช้เครื่องมือ`
- Body (long) → ✅ แปลทั้งหมด:
  - `We don't just hand you a tool and walk away. We believe real change only happens when teams understand the technology — not just how to use it, but when to use it and when not to.`
  → `เราไม่ได้แค่ส่งเครื่องมือให้แล้วจากไป เราเชื่อว่าการเปลี่ยนแปลงจริงเกิดขึ้นเมื่อทีมเข้าใจเทคโนโลยี — ไม่ใช่แค่วิธีใช้ แต่รู้ว่าเมื่อไหร่ควรใช้ และเมื่อไหร่ไม่ควร`
  - `That's why every engagement includes knowledge transfer. We want your team to be capable of continuing without us.`
  → `นั่นคือเหตุผลที่ทุกงานรวม knowledge transfer ไว้ด้วย เราอยากให้ทีมของคุณทำต่อได้เองโดยไม่ต้องพึ่งเรา`
  - `We also publish AI education content on our YouTube channel — @AgenticLab.`
  → `เรายังเผยแพร่เนื้อหาความรู้ AI บนช่อง YouTube — @AgenticLab`

### 5.6 Deliverables cards
- `After assessment` → ✅ `หลังการประเมิน`
- `After build or training` → ✅ `หลังการสร้างหรืออบรม`
- `During scale` → ✅ `ระหว่างขยายผล`
- Items: ไม่แปลเพราะย่อยมาก (ระบุเฉพาะที่ตกหล่น):
  - `Workflow maps` → ✅ `แผนผัง workflow`
  - `AI opportunity report` → ✅ `รายงานโอกาส AI`
  - `Team readiness evaluation` → ✅ `การประเมินความพร้อมของทีม`
  - `Honest recommendation` → ✅ `คำแนะนำที่ตรงไปตรงมา`
  - `Working system or trained team` → ✅ `ระบบที่ใช้งานได้หรือทีมที่ผ่านการอบรม`
  - `Documentation` → ✅ `เอกสาร`
  - `Knowledge transfer sessions` → ✅ `เซสชัน knowledge transfer`
  - `Ongoing support plan` → ✅ `แผน support ต่อเนื่อง`
  - `New capability workshops` → ✅ `Workshop ความสามารถใหม่`
  - `Performance monitoring` → ✅ `Monitor ประสิทธิภาพ`
  - `Continuous improvement` → ✅ `ปรับปรุงต่อเนื่อง`
  - `Training refreshers` → ✅ `อบรมทบทวน`

### 5.7 Final CTA
- `Ready to start with an assessment?` → ✅ `พร้อมเริ่มจากการประเมินหรือยัง?`

---

## 6. OpenBridge (/openbridge)

### 6.1 Hero
- Badge `In active development — first-mover access open`
  → ⚠️ (a) `อยู่ระหว่างพัฒนา — เปิดรับ first-mover` (b) `กำลังพัฒนา — เปิดรับผู้ใช้รุ่นแรก`
- Title `The last employee you'll ever train.`
  → ⚠️ (a) `พนักงานคนสุดท้ายที่คุณต้องสอน`
  - (b) `สอนแค่ครั้งเดียว ไม่ต้องเริ่มใหม่อีกเลย`
  - (c) `พนักงานที่คุณสอนครั้งเดียว แล้วอยู่กับคุณตลอดไป`
- Subtitle 1 `Teach your business once. They remember forever. And we keep sharpening them as we learn what works across shops.`
  → ✅ `สอนธุรกิจของคุณแค่ครั้งเดียว พวกเขาจะจำไว้ตลอด และเรายังพัฒนาพวกเขาต่อเรื่อย ๆ จากสิ่งที่เราเรียนรู้จากร้านอื่น ๆ`
- Subtitle 2 → ✅ `OpenBridge คือแพลตฟอร์ม Agentic AI ที่เรากำลังสร้างอยู่ตอนนี้ first-mover จะได้คุยกับผู้ก่อตั้งโดยตรง มีอิทธิพลต่อ roadmap และล็อกราคาเริ่มต้นไว้ล่วงหน้า`
- CTA `Request first-mover access →` → ✅ `ขอสิทธิ์ first-mover →`
- Subtext `LINE @enabridge — just type "FIT"` → ✅ `LINE @enabridge — พิมพ์คำว่า "FIT"`

### 6.2 The problem
- Label `The problem` → ✅ `ปัญหา`
- Title `Institutional knowledge is fragile.`
  → ⚠️ (a) `ความรู้ในองค์กรนั้นเปราะบาง`
  - (b) `ความรู้ขององค์กรอยู่แค่ในหัวพนักงาน มันเปราะบาง`
- Body → ✅ `มันอยู่ในหัวของคน พอคนไป ความรู้ก็ไปด้วย และคนใหม่ต้องเริ่มจากศูนย์ วิธีคุยกับลูกค้าประจำ ข้อยกเว้น 14 ข้อในราคา ทำไมวันอังคารถึงต่าง — นี่แหละคือสินทรัพย์ที่แท้จริงของคุณ`
- Body 2 → ✅ `OpenBridge กำลังถูกสร้างเพื่อเก็บสิ่งที่ทำให้ธุรกิจของคุณเป็นของคุณ — ไม่ให้มันหายไป พร้อมใช้เสมอ และสะสมขึ้นเรื่อย ๆ`

### 6.3 "What we're building"
- Label `What we're building` → ✅ `สิ่งที่เรากำลังสร้าง`
- Title `AI employees designed to onboard fast, never quit, and keep getting sharper.`
  → ✅ `พนักงาน AI ที่ออกแบบมาให้ onboard ได้เร็ว ไม่ลาออก และเก่งขึ้นเรื่อย ๆ`
- Metrics:
  - `Fast / Onboarding (hours, not months)` → ✅ `เร็ว / Onboard (ชั่วโมง ไม่ใช่เดือน)`
  - `Persistent / Memory that doesn't fade` → ✅ `ทนทาน / ความจำที่ไม่เลือน`
  - `Improving / Training updates over time` → ✅ `พัฒนาต่อเนื่อง / อัปเดตการเทรนเป็นระยะ`
  - `Consistent / Always on, always on-brand` → ✅ `สม่ำเสมอ / เปิดตลอด ตรงกับแบรนด์`
- Footnote → ✅ `ตัวเลขจริงขึ้นอยู่กับขนาดและความซับซ้อนของร้านคุณ เราขอคุยเพื่อตั้งความคาดหวังที่เป็นจริงมากกว่าจะพิมพ์ตัวเลขโฆษณาไว้ตรงนี้`

### 6.4 "Why it compounds"
- Label `Why it compounds` → ⚠️ (a) `ทำไมมันยิ่งทำยิ่งเก่ง` (b) `ทำไมความสามารถยิ่งสะสม`
- Title `Four layers of training, so knowledge only grows.` → ✅ `การเทรน 4 ชั้น ที่ทำให้ความรู้เพิ่มขึ้นอย่างเดียว`
- Table:
  - Row 1 `Your business / Menu, hours, tone, policies / You — once, at onboarding`
    → ✅ `ธุรกิจของคุณ / เมนู เวลาเปิด โทน นโยบาย / คุณ — ครั้งเดียว ตอน onboard`
  - Row 2 `Your patterns / Regulars, seasonal promos, exceptions / They discover, you approve`
    → ✅ `Pattern ของคุณ / ลูกค้าประจำ โปรตามฤดู ข้อยกเว้น / AI ค้นพบ คุณอนุมัติ`
  - Row 3 `Our playbook / New tactics, objection handling, seasonal scripts / We push updates as we learn`
    → ✅ `Playbook ของเรา / วิธีใหม่ การรับมือข้อโต้แย้ง สคริปต์ตามฤดู / เราอัปเดตเมื่อเรียนรู้สิ่งใหม่`
  - Row 4 `The fundamentals / How to greet, qualify, escalate, close / Built-in, always current`
    → ✅ `พื้นฐาน / วิธีทักทาย คัดกรอง ส่งต่อ ปิดการขาย / ติดตั้งไว้ เป็นปัจจุบันเสมอ`
- Body → ✅ `ชั้นที่สี่คือแนวคิดระยะยาว — คลังเทรนนิ่งกลาง เหมือน HQ ของ franchise ที่อบรมทุกสาขา เมื่อเราทำกับหลาย ๆ ร้านมากขึ้น pattern ที่เวิร์คในร้านหนึ่งจะช่วยยกระดับทั้งแพลตฟอร์ม`

### 6.5 Meet the team
- Label `Meet the team` → ✅ `ทีมของเรา`
- Title `Hire one. Hire all. They share the same memory.`
  → ✅ `จ้างคนเดียวก็ได้ จ้างทั้งทีมก็ได้ พวกเขาแชร์ความจำกัน`
- Roles:
  - `Frontline / Greets, qualifies, routes. The face of your shop.`
    → ✅ `Frontline / ทักทาย คัดกรอง ส่งต่อ เป็นหน้าตาของร้าน`
  - `Care / Follow-ups, complaints, refund conversations.`
    → ✅ `Care / ติดตามผล รับเรื่องร้องเรียน คุยเรื่องคืนเงิน`
  - `Content / Captions, menus, product descriptions in your voice.`
    → ✅ `Content / แคปชัน เมนู คำอธิบายสินค้าในโทนของคุณ`
  - `Analyst / What sold this week, what didn't, and why.`
    → ✅ `Analyst / อะไรขายดีสัปดาห์นี้ อะไรไม่ดี และทำไม`
  - `Finance / Invoices, payment reminders, reconciliation.`
    → ✅ `Finance / ใบแจ้งหนี้ แจ้งเตือนชำระเงิน reconcile`

### 6.6 Honest status
- Label `Honest status` → ⚠️ (a) `สถานะจริง` (b) `บอกตรง ๆ ว่าถึงไหนแล้ว`
- Title `Where we are, and what you get by joining early.`
  → ✅ `ตอนนี้เราอยู่จุดไหน และคุณจะได้อะไรถ้ามาเร็ว`
- `Ready today` → ✅ `พร้อมใช้แล้ววันนี้`
  - ✅ `Prototype ใช้งานได้ พร้อม agent ด้านล่าง`
  - ✅ `เชื่อมต่อ LINE Official Account`
  - ✅ `ระบบ memory หลักสำหรับความรู้ธุรกิจของคุณ`
  - ✅ `Flow อนุมัติแบบ human-in-the-loop`
- `In progress` → ✅ `กำลังพัฒนา`
  - ✅ `ค้นหา pattern และอัปเดตเทรนนิ่งเป็นระยะ`
  - ✅ `ข้าม platform (Messenger, WhatsApp, widget บนเว็บ)`
  - ✅ `Dashboard วิเคราะห์สำหรับเจ้าของร้าน`
  - ✅ `Flow onboard สาธารณะ (ตอนนี้ยังเป็น concierge)`
- `First-movers get` → ✅ `First-mover จะได้`
  - ✅ `คุยกับผู้ก่อตั้งโดยตรงตอน onboard`
  - ✅ `ฟีดแบคของคุณจะ shape roadmap`
  - ✅ `ล็อกราคา early pricing ไว้`
  - ✅ `บริการตั้งค่าแบบ concierge — เราจัดให้`
- Footnote → ✅ `ถ้าคุณกำลังมองหา product สำเร็จรูปที่เสร็จเรียบร้อย เรายังไม่ถึงจุดนั้น แต่ถ้าอยากช่วย shape ของจริงและได้ราคา founder-access เรายินดีคุย`

### 6.7 Built by Enabridge
- Label `Built by Enabridge` → ✅ `สร้างโดย Enabridge`
- Title `The same team that ships real production systems.`
  → ✅ `ทีมเดียวกับที่ส่งมอบระบบ production จริง`
- Body 1 → ✅ `OpenBridge สร้างโดยทีม Enabridge — ทีมเดียวกับที่ส่งมอบระบบ production 3 ระบบด้วย AI coding agent รวมถึง POS ecosystem ที่มีผู้ใช้งานกว่า 1,000 คนต่อวัน และ engine compliance สำหรับการโอนคริปโตที่ถูกกำกับ`
- Body 2 → ✅ `เราไม่ใช่ research lab เรารู้วิธีส่งของจริง`
- Buttons:
  - `See case studies →` → ✅ `ดู Case Studies →`
  - `Meet the founder` → ✅ `พบผู้ก่อตั้ง`

### 6.8 Final CTA
- Label `Free 20-minute conversation` → ✅ `คุย 20 นาที ฟรี`
- Title `Every month is another month of knowledge you could be capturing.`
  → ⚠️ (a) `ทุกเดือนที่ผ่านไป คือความรู้อีกเดือนที่คุณเก็บได้`
  - (b) `อย่าปล่อยให้ความรู้สำคัญหลุดมือไปอีกเดือน`
- Body → ✅ `คุย 20 นาที เพื่อเข้าใจร้านคุณและดูว่า OpenBridge เหมาะไหม ถ้าไม่เหมาะ เราจะบอกตรง ๆ และแนะนำที่อื่นให้`
- CTA `Start the conversation →` → ✅ `เริ่มคุยกัน →`

---

## 7. Company (/company)

### 7.1 Hero
- Title `We build, teach, and consult — honestly.`
  → ⚠️ (a) `เราสร้าง สอน และให้คำปรึกษา — อย่างตรงไปตรงมา`
  - (b) `สร้าง สอน ที่ปรึกษา — โดยไม่โม้`
- Description → ✅ `Enabridge ถือกำเนิดขึ้นเพื่อลดช่องว่างระหว่างกระแส AI กับความเป็นจริง เราพูดเฉพาะสิ่งที่เราพิสูจน์ได้`

### 7.2 Mission
- Title `Close the gap between AI hype and production reality` → ✅ `ปิดช่องว่างระหว่าง hype ของ AI กับความจริงใน production`
- Body 1 → ✅ `เราเชื่อว่าการขาย AI ส่วนใหญ่โม้เกินจริง เราขอโชว์ระบบ production 3 ระบบที่ส่งมอบจริงและประวัติอบรมที่เชื่อถือได้ ดีกว่าสไลด์ที่เต็มไปด้วยศัพท์ enterprise`
- Body 2 → ✅ `Enabridge มีอยู่เพื่อช่วยธุรกิจนำ AI มาใช้จริง — ไม่ว่าจะหมายถึงการสร้างซอฟต์แวร์ อบรมทีม หรือออกแบบ workflow ที่สร้างความแตกต่างได้จริง`

### 7.3 Principles
- Title `What we stand for` → ✅ `สิ่งที่เรายึดถือ`
- Items:
  - ✅ `ส่งมอบซอฟต์แวร์จริง ไม่ใช่แค่ต้นแบบ`
  - ✅ `สอนในสิ่งที่เราทำ`
  - ✅ `ประเมินก่อนแนะนำ`
  - ✅ `ตรงไปตรงมาเรื่องสิ่งที่ทำได้และทำไม่ได้`
  - ✅ `วิศวกรรมระดับ production ตั้งแต่ commit แรก`

### 7.4 Founder
- Label `Founder` → ✅ `ผู้ก่อตั้ง`
- Role `Founder` → ✅ `ผู้ก่อตั้ง`
- Experience heading → ✅ `ประสบการณ์`
- Founder highlights (founderInfo.highlights):
  - ✅ `ประสบการณ์ 20 ปีในการพัฒนาซอฟต์แวร์และกลยุทธ์ IT`
  - ✅ `เคยทำงานในบริษัทเทคโนโลยีระดับโลก`
  - ✅ `นำทีมส่งมอบซอฟต์แวร์ให้ธนาคารและตลาด crypto ชั้นนำ`
  - ✅ `พิสูจน์ความสามารถในการ scale product ซอฟต์แวร์`
  - ✅ `ผู้บุกเบิกการผสาน AI เข้ากับ development workflow`
- Industry heading → ✅ `อุตสาหกรรมที่เชี่ยวชาญ`
- Industries:
  - ✅ `ธนาคารและบริการการเงิน`
  - ✅ `คริปโตและ blockchain`
  - ✅ `Digital payment และ e-wallet`
- LinkedIn link → ✅ `LinkedIn`

### 7.5 Capabilities
- Label `Capabilities` → ✅ `ความสามารถ`
- Title `What we do` → ✅ `สิ่งที่เราทำ`
- Card 1 `AI-Powered Development` → ✅ `พัฒนาซอฟต์แวร์ด้วย AI`
  - Body → ✅ `สร้างซอฟต์แวร์ได้เร็วด้วย AI coding agent เว็บแอป มือถือ API และแพลตฟอร์ม full-stack ส่งมอบในเวลาสัปดาห์`
- Card 2 `AI Training & Education` → ✅ `อบรมและให้ความรู้ AI`
  - Body → ✅ `โปรแกรมอบรมองค์กรพร้อมประวัติที่พิสูจน์ได้ — หน่วยงานภาครัฐ สถาบัน และบริษัทเอกชน`
- Card 3 `Agentic AI Product` → ✅ `ผลิตภัณฑ์ Agentic AI`
  - Body → ✅ `กำลังสร้าง OpenBridge — แพลตฟอร์ม Agentic AI ของเราเอง ที่มาจากประสบการณ์ส่งมอบงานจริง`

### 7.6 Trust & Governance (absorbed section)
- Label `Trust & Governance` → ⚠️ (a) `ความน่าเชื่อถือและการกำกับดูแล` (b) `ความไว้วางใจและธรรมาภิบาล`
- Title `Our principles for AI safety` → ✅ `หลักการของเราเรื่องความปลอดภัย AI`
- Intro → ✅ `นี่คือหลักการที่เรายึดเมื่อสร้างระบบ AI — ทั้งให้ลูกค้าและใน OpenBridge`
- 6 Trust items:
  - `Human approval for high-impact actions` → ✅ `ต้องมีมนุษย์อนุมัติสำหรับการกระทำที่มีผลกระทบสูง`
    - Body → ✅ `Agent จะส่งต่อให้ผู้อนุมัติที่กำหนดก่อนดำเนินการที่ละเอียดอ่อน`
  - `Audit logs` → ✅ `Audit log`
    - Body → ✅ `ทุกการกระทำของ agent ถูก log พร้อม timestamp, input, output และเหตุผลของการตัดสินใจ`
  - `Scoped permissions` → ✅ `สิทธิ์จำกัดตามขอบเขต`
    - Body → ✅ `Agent เข้าถึงเฉพาะระบบและข้อมูลที่จำเป็น — ไม่เกินนั้น`
  - `Fallback mode` → ✅ `โหมด fallback`
    - Body → ✅ `เมื่อเจอความไม่แน่นอน agent จะหยุดและส่งต่อให้มนุษย์`
  - `Monitoring` → ✅ `Monitoring`
    - Body → ✅ `Dashboard แบบ real-time ติดตามประสิทธิภาพ อัตราข้อผิดพลาด และความผิดปกติ`
  - `Data boundaries` → ✅ `ขอบเขตของข้อมูล`
    - Body → ✅ `ควบคุมเข้มงวดว่า agent อ่าน เขียน และส่งข้อมูลอะไรได้บ้าง`

### 7.7 Final CTA
- `Want to work with us?` → ✅ `อยากร่วมงานกับเราไหม?`

---

## 8. Agentic AI (/agentic-ai)

### 8.1 Hero
- Title `What Agentic AI means — and where we are with it.` → ✅ `Agentic AI คืออะไร — และเราอยู่จุดไหนแล้ว`
- Description → ✅ `Agentic AI คือ AI ที่ลงมือทำ ไม่ใช่แค่ตอบคำถาม เรากำลังมุ่งไปจุดนี้ด้วย OpenBridge และช่วยประเมินให้คุณได้ว่ามันเหมาะกับองค์กรคุณหรือไม่`

### 8.2 Maturity model
- Label `Maturity model` → ⚠️ (a) `โมเดลวุฒิภาวะ` (b) `ระดับความสามารถ` (c) `Maturity Model` (ทับศัพท์)
- Title `A staged approach to autonomy` → ✅ `การให้ AI ทำงานแบบเป็นลำดับขั้น`
- Intro → ✅ `นี่คือโมเดลที่เรายึดในการพัฒนา product และให้คำปรึกษาของเราเอง องค์กรส่วนใหญ่เริ่มจาก Stage 1 ซึ่งเหมาะสมแล้ว`
- Stages (agenticMaturity):
  - `Assist` → ✅ `Assist / ช่วย`
    - ✅ `AI ให้การวิเคราะห์ ข้อเสนอแนะ และสรุป — มนุษย์ตัดสินใจทั้งหมด`
  - `Operate with approval` → ✅ `Operate with approval / ทำโดยต้องอนุมัติ`
    - ✅ `Agent เสนอการกระทำ แล้วทำเฉพาะหลังจากมนุษย์อนุมัติทีละขั้น`
  - `Operate with guardrails` → ✅ `Operate with guardrails / ทำภายใต้ขอบเขต`
    - ✅ `Agent ทำงานเองภายในสิทธิ์ที่กำหนด พร้อม monitoring และ fallback`

### 8.3 Capabilities
- Label `Capabilities` → ✅ `ความสามารถ`
- Title `What Agentic AI enables` → ✅ `Agentic AI เปิดโอกาสอะไรบ้าง`
- 4 cards:
  - `Multi-step execution` → ✅ `ทำงานหลายขั้นตอน`
    - ✅ `Agent ทำ workflow ที่ข้ามระบบและข้ามการตัดสินใจ ไม่ใช่แค่ตอบครั้งเดียว`
  - `Tool use & integrations` → ✅ `ใช้เครื่องมือและเชื่อมต่อระบบ`
    - ✅ `Agent เชื่อมต่อกับระบบที่มีอยู่ — API, database, SaaS — และลงมือแทนคุณ`
  - `Human-in-the-loop` → ✅ `Human-in-the-loop`
    - ✅ `สำหรับการกระทำที่เดิมพันสูง agent จะหยุดและส่งต่อให้มนุษย์อนุมัติก่อน`
  - `Observable & auditable` → ✅ `ตรวจสอบและติดตามได้`
    - ✅ `ทุกการกระทำถูก log ทุกการตัดสินใจมีเหตุผล ทีมของคุณรีวิวและ rollback ได้`

### 8.4 OpenBridge connection
- Label `Our product` → ✅ `product ของเรา`
- Title `We're building OpenBridge to make this real.` → ✅ `เรากำลังสร้าง OpenBridge เพื่อทำให้ของจริงเกิดขึ้น`
- Body → ✅ `แทนที่จะแค่พูดเรื่อง Agentic AI เรากำลังสร้างมันอยู่ OpenBridge คือแพลตฟอร์ม Agentic AI ของเรา — กำลังพัฒนาอยู่ มาจากประสบการณ์จริง`
- Button `Learn more about OpenBridge` → ✅ `อ่านเพิ่มเติมเรื่อง OpenBridge`

### 8.5 Custom workflows
- Label `Consulting` → ✅ `ให้คำปรึกษา`
- Title `Interested in custom agentic workflows?` → ✅ `สนใจออกแบบ agentic workflow ตามต้องการไหม?`
- Body → ✅ `ถ้าองค์กรคุณอยากสำรวจ agentic workflow เราช่วยได้ — เริ่มจากการประเมินอย่างตรงไปตรงมาว่าคุณอยู่จุดไหนและอะไรเป็นจริงได้ เราไม่ขายโซลูชันโดยไม่ประเมินก่อน`

### 8.6 Final CTA
- `Want to explore Agentic AI for your organization?` → ✅ `อยากลองสำรวจ Agentic AI สำหรับองค์กรของคุณไหม?`

---

## 9. Contact (/contact)

- Hero title `Get in touch.` → ✅ `ติดต่อเรา`
- Description `No forms, no booking widgets. Just reach out directly.` → ✅ `ไม่มีฟอร์ม ไม่มี widget นัดหมาย ติดต่อตรงได้เลย`
- Label `LINE` → 🔒 `LINE`
- Label `Phone` → ✅ `โทรศัพท์`
- Label `Email` → ✅ `อีเมล`
- `Our primary channel` → ✅ `ช่องทางหลักของเรา`
- `Call us directly` → ✅ `โทรหาเราได้ตรง`
- `We respond within 24 hours` → ✅ `ตอบกลับภายใน 24 ชั่วโมง`

---

## 10. PageHero `label` values (ถูกใช้ใน 4+ หน้า)

| EN | TH |
|---|---|
| Services | บริการ |
| Case Studies | Case Studies / ผลงาน |
| Case Study | Case Study / ผลงาน |
| How We Work | วิธีการทำงาน |
| Agentic AI | Agentic AI (🔒) |
| Company | เกี่ยวกับเรา |
| Contact | ติดต่อ |
| Product | ผลิตภัณฑ์ |

---

## 11. Metadata (SEO)

Every page's `<title>` and `<meta description>` should have a Thai version. Same pattern.

**Root (default)**
- Title `Enabridge — Build, Teach, Consult with AI` → ⚠️
  - (a) `Enabridge — สร้าง สอน ที่ปรึกษา ด้วย AI`
  - (b) `Enabridge — พัฒนา อบรม ให้คำปรึกษา ด้วย AI`
  - (c) คงภาษาอังกฤษไว้ (brand recognition)
- Description → ✅ `Enabridge พัฒนาซอฟต์แวร์ production ด้วย AI coding agent อบรม AI ให้องค์กร และกำลังสร้าง OpenBridge — แพลตฟอร์ม Agentic AI ของเราเอง จากกรุงเทพฯ`

(ที่เหลือจะแปลตามหน้า เหมือนแพตเทิร์นด้านบน)

---

## 12. คำถามสำคัญ — การ implement

**ก่อนผมเริ่มเขียนโค้ด — อยากถามวิธีที่คุณต้องการ:**

### 12.1 URL / Locale routing
- **(a)** `/th/...` vs `/en/...` (Next.js i18n routing) — SEO ดีที่สุด, URL แยกชัดเจน
- **(b)** Toggle button ที่ switch language ในที่เดียว (cookie-based) — URL คงที่
- **(c)** Auto-detect จาก browser + toggle

### 12.2 Default language
- **(a)** Thai เป็น default (ลูกค้าหลักคือไทย) — Auto-redirect เป็น `/th/`
- **(b)** English เป็น default
- **(c)** ไม่ redirect — เลือกผ่าน toggle เสมอ

### 12.3 ลำดับการ ship
- **(a)** แปลทั้งหมดรอบเดียว deploy รอบเดียว (2-3 วัน)
- **(b)** ทยอยแปลทีละหน้า แต่ละหน้าขึ้น production ได้เลย (หน้า home ก่อน)

---

## สรุป ⚠️ ที่อยากให้ review

1. BrandLogo tagline (1.1)
2. "Case Studies" nav label (1.2)
3. "How We Work" nav label (1.2)
4. Hero title tone (2.1)
5. "Shipped and running" section label (2.4)
6. OpenBridge teaser headline (2.6)
7. How We Work hero title (5.1)
8. OpenBridge "first-mover" badge (6.1)
9. OpenBridge hero "The last employee..." (6.1)
10. OpenBridge "Institutional knowledge is fragile" (6.2)
11. OpenBridge "Why it compounds" label (6.4)
12. OpenBridge "Honest status" label (6.6)
13. OpenBridge final CTA headline (6.8)
14. Company hero "honestly" (7.1)
15. "Trust & Governance" (7.6)
16. "Maturity model" label (8.2)
17. Root metadata title (11)
18. URL routing strategy (12.1)
19. Default language (12.2)
20. Shipping order (12.3)
