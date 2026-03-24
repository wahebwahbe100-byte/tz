
:root{
  --bg:#f6fbff;
  --bg-soft:#eef7fd;
  --card:#ffffff;
  --text:#102433;
  --muted:#5b6f7d;
  --line:#dceaf4;
  --primary:#1590d1;
  --primary-2:#0b5f8d;
  --primary-3:#073e5f;
  --success:#20b15a;
  --shadow:0 18px 50px rgba(8,74,113,.10);
  --radius:22px;
  --container:1200px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at top left, rgba(21,144,209,.10), transparent 24%),
    radial-gradient(circle at 85% 10%, rgba(11,95,141,.10), transparent 18%),
    linear-gradient(180deg,#f8fcff 0%, #f4faff 100%);
  line-height:1.6;
}
img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}
.container{width:min(var(--container), calc(100% - 32px));margin:auto}
.small{font-size:14px}
.topbar{
  background:linear-gradient(90deg,var(--primary-3),var(--primary-2));
  color:#fff;
}
.topbar .wrap{
  display:flex;justify-content:space-between;align-items:center;gap:16px;
  padding:10px 0;flex-wrap:wrap;
}
.topbar a{color:#fff;opacity:.95}
header{
  position:sticky; top:0; z-index:60;
  background:rgba(255,255,255,.92);
  backdrop-filter: blur(10px);
  border-bottom:1px solid rgba(16,36,51,.06);
}
.nav{
  display:flex; align-items:center; justify-content:space-between; gap:20px;
  padding:16px 0;
}
.brand{display:flex;align-items:center;gap:14px;font-weight:800;color:var(--primary-3);font-size:22px}
.logo{
  width:48px;height:48px;border-radius:16px;display:grid;place-items:center;
  color:#fff;font-size:24px;font-weight:800;
  background:linear-gradient(135deg,var(--primary),var(--primary-2));
  box-shadow:var(--shadow);
}
.menu{display:flex;gap:24px;align-items:center;list-style:none;margin:0;padding:0}
.menu a{font-weight:700;color:#25495f}
.menu a.active,.menu a:hover{color:var(--primary)}
.actions{display:flex;gap:12px;align-items:center}
.mobile-toggle{
  display:none;border:none;background:none;font-size:28px;color:var(--primary-3)
}
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:14px 20px;border-radius:999px;font-weight:700;
  border:1px solid transparent;transition:.22s ease;
}
.btn:hover{transform:translateY(-1px)}
.btn-primary{
  color:#fff;background:linear-gradient(90deg,var(--primary),var(--primary-2));
  box-shadow:0 14px 30px rgba(21,144,209,.22);
}
.btn-secondary{background:#fff;border-color:var(--line);color:var(--primary-3)}
.btn-whatsapp{background:var(--success);color:#fff}
.btn-light{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff}
section{padding:82px 0}
.hero{padding:62px 0 34px}
.hero-grid{
  display:grid;grid-template-columns:1.08fr .92fr;gap:34px;align-items:center
}
.badge{
  display:inline-flex;align-items:center;gap:10px;
  background:#fff;border:1px solid var(--line);padding:10px 14px;border-radius:999px;
  color:var(--primary-2);font-weight:800;box-shadow:var(--shadow)
}
.hero h1{
  font-size:clamp(36px,5vw,62px);line-height:1.03;margin:18px 0 16px;
  letter-spacing:-1.4px;
}
.hero p{font-size:18px;color:var(--muted);max-width:730px;margin:0}
.hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
.hero-points{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
.point{
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px;
  box-shadow:var(--shadow);min-height:110px
}
.point strong{display:block;color:var(--primary-3);font-size:17px;margin-bottom:6px}
.visual{
  background:linear-gradient(180deg,#ffffff,#f1f9fe);
  border:1px solid var(--line);border-radius:30px;padding:18px;box-shadow:var(--shadow)
}
.visual-window{
  border-radius:24px;overflow:hidden;border:1px solid #d9eaf5;background:#fff
}
.visual-head{
  background:linear-gradient(90deg,var(--primary-3),var(--primary));
  color:#fff;padding:22px 24px
}
.visual-head h3{margin:0 0 8px;font-size:30px;line-height:1.1}
.visual-head p{margin:0;color:rgba(255,255,255,.88)}
.visual-body{padding:18px;background:#f9fcff}
.mock-banner{
  background:linear-gradient(135deg,#eaf7ff,#ffffff);
  border:1px solid var(--line);border-radius:20px;padding:20px;margin-bottom:16px
}
.mock-banner strong{display:block;font-size:24px;line-height:1.2;color:var(--primary-3)}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.tile{
  background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px;
  font-weight:700;color:var(--primary-2);min-height:82px;display:flex;align-items:center
}
.section-head{max-width:760px;margin-bottom:26px}
.eyebrow{
  text-transform:uppercase;font-size:13px;letter-spacing:.8px;font-weight:800;color:var(--primary)
}
.section-head h2{
  margin:10px 0 12px;font-size:clamp(30px,4vw,44px);line-height:1.08
}
.section-head p{margin:0;color:var(--muted)}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.card{
  background:#fff;border:1px solid var(--line);border-radius:24px;padding:24px;box-shadow:var(--shadow)
}
.icon{
  width:58px;height:58px;border-radius:18px;display:grid;place-items:center;
  background:var(--bg-soft);font-size:28px;color:var(--primary-2);margin-bottom:18px
}
.card h3{margin:0 0 10px;font-size:22px}
.card p{margin:0;color:var(--muted)}
.split{display:grid;grid-template-columns:.96fr 1.04fr;gap:24px;align-items:center}
.panel{
  background:#fff;border:1px solid var(--line);border-radius:26px;padding:28px;box-shadow:var(--shadow)
}
.checks{display:grid;gap:14px;margin-top:18px}
.check{
  display:flex;gap:12px;align-items:flex-start;background:#f9fdff;border:1px solid var(--line);
  border-radius:16px;padding:14px 16px
}
.check b{display:block;margin-bottom:3px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}
.stat{
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px;text-align:center
}
.stat strong{display:block;font-size:30px;color:var(--primary-3)}
.process{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.step{
  background:#fff;border:1px solid var(--line);border-radius:22px;padding:24px;box-shadow:var(--shadow)
}
.step-num{
  width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-weight:800;color:#fff;
  background:linear-gradient(135deg,var(--primary),var(--primary-2));margin-bottom:14px
}
.band{
  background:linear-gradient(135deg,var(--primary-3),var(--primary));
  color:#fff;border-radius:30px;padding:34px;box-shadow:var(--shadow)
}
.band-grid{
  display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap
}
.band h2{margin:0 0 10px;font-size:clamp(28px,4vw,42px)}
.band p{margin:0;color:rgba(255,255,255,.92)}
.page-hero{
  padding:58px 0 34px;border-bottom:1px solid var(--line);
  background:linear-gradient(180deg,#edf8ff,#f7fbff)
}
.page-hero h1{font-size:clamp(32px,4vw,48px);margin:10px 0}
.page-hero p{margin:0;color:var(--muted);max-width:760px}
.services-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.service-box{
  background:#fff;border:1px solid var(--line);border-radius:24px;padding:24px;box-shadow:var(--shadow)
}
.service-box ul{margin:14px 0 0 18px;color:var(--muted)}
.emphasis{
  background:linear-gradient(135deg,#e9f7ff,#fff);
  border:1px solid var(--line);border-radius:20px;padding:18px
}
.about-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:24px;align-items:center}
.photo-box{
  min-height:380px;border-radius:28px;position:relative;overflow:hidden;
  border:1px solid var(--line);box-shadow:var(--shadow);
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.85), transparent 22%),
    linear-gradient(135deg, rgba(21,144,209,.35), rgba(7,62,95,.85));
}
.photo-box::after{
  content:"CELIK Räumkonzept";
  position:absolute;left:24px;bottom:24px;color:#fff;font-size:34px;font-weight:800;line-height:1.1
}
.values{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.testimonials{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.quote{
  background:#fff;border:1px solid var(--line);border-radius:24px;padding:24px;box-shadow:var(--shadow)
}
.quote .stars{font-size:18px;margin-bottom:12px}
.quote p{margin:0 0 14px;color:var(--muted)}
.quote strong{display:block}
.note-box{
  background:#fff8e8;border:1px solid #f1deb2;border-radius:18px;padding:18px;color:#7b5a09
}
.faq{display:grid;gap:14px}
details{
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px 18px;box-shadow:var(--shadow)
}
summary{cursor:pointer;font-weight:800}
.contact-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:24px}
.contact-list{display:grid;gap:16px}
.contact-item{
  background:#fff;border:1px solid var(--line);border-radius:20px;padding:20px;box-shadow:var(--shadow)
}
.form-card{
  background:#fff;border:1px solid var(--line);border-radius:26px;padding:24px;box-shadow:var(--shadow)
}
label{display:block;font-weight:700;margin-bottom:8px}
input,select,textarea{
  width:100%;padding:14px 16px;border-radius:14px;border:1px solid #cfe0eb;
  background:#fcfeff;font:inherit;color:var(--text)
}
textarea{min-height:150px;resize:vertical}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.quick-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:14px}
.whatsapp-float{
  position:fixed;right:18px;bottom:18px;z-index:70;width:60px;height:60px;border-radius:50%;
  display:grid;place-items:center;background:#20b15a;color:#fff;font-size:28px;box-shadow:0 16px 35px rgba(32,177,90,.35)
}
footer{background:#0e2230;color:#d6e3eb;margin-top:70px}
.footer-grid{display:grid;grid-template-columns:1.2fr .8fr .9fr;gap:28px;padding:42px 0}
footer h4{color:#fff;margin:0 0 14px}
footer p, footer a{color:#d6e3eb}
.copy{padding:16px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#b7c6cf}
.muted{color:var(--muted)}
.notice{font-size:13px;color:#7d90a0;margin-top:12px}
@media (max-width: 980px){
  .hero-grid,.split,.about-grid,.contact-grid,.footer-grid{grid-template-columns:1fr}
  .cards,.values{grid-template-columns:repeat(2,1fr)}
  .services-grid,.process,.testimonials,.hero-points{grid-template-columns:1fr 1fr}
  .menu,.actions{display:none}
  .mobile-toggle{display:block}
  header.mobile-open .menu{
    display:flex;position:absolute;left:16px;right:16px;top:82px;background:#fff;border:1px solid var(--line);
    border-radius:18px;padding:18px;flex-direction:column;align-items:flex-start;box-shadow:var(--shadow)
  }
  header.mobile-open .actions{
    display:flex;position:absolute;left:16px;right:16px;top:340px;background:#fff;padding:0 18px 18px;border-radius:0 0 18px 18px
  }
}
@media (max-width:680px){
  .cards,.values,.services-grid,.process,.testimonials,.stats,.hero-points,.form-grid{grid-template-columns:1fr}
  .hero{padding-top:40px}
}
