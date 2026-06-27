// src/main.ts
import './style.css'

interface ValueProposition {
  title: string;
  description: string;
}

// תועלות ברורות בשפה של רצפת הייצור
const koraBenefits: ValueProposition[] = [
  {
    title: "לחתוך את ה-Cycle Time בלי לרחם",
    description: "אנחנו מנקים ומייעלים את פקודות הריצה וה-G-Code שלכם. התוצאה: המכונה זזה חכם יותר, מורידה שניות קריטיות מכל חלק, ומוציאה הרבה יותר סחורה בכל משמרת."
  },
  {
    title: "שומרים על הספינדל ועל הכלים שלכם",
    description: "כיול נכון של עומסים ומהירויות הזנה (Feed) מונע שברים פתאומיים של כרסומים ועוצר שחיקה מואצת של צירים יקרים. פחות השבתות מבאסות באמצע הלחץ – יותר עבודה רציפה."
  },
  {
    title: "פחות בלאי, פחות חשמל",
    description: "כשמכונה מתאמצת לחינם או 'רוקדת' על חומר הגלם, המנועים נשחקים וחשבון החשמל קופץ. האופטימיזציה שלנו גורמת למכונה לעבוד חלק, מה שמאריך משמעותית את החיים של חלקי החילוף."
  }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="kora-header container">
  <div class="brand">KORA<span>.</span></div>
  <button class="contact-btn">בוא נשדרג את המכונות שלי</button>
</header>

<main class="container">
  <section class="hero-section">
    <div class="hero-content">
      <h1>המכונות שלכם. קצב מהיר יותר, אפס תקלות, מקסימום תפוקה.</h1>
      <p>בעלי בתי מלאכה ומפעלים מכירים את הסיוט: זמני עיבוד ארוכים מדי, כרסומים שנשברים ברגע הכי לא נכון, ועיכובים במסירות ללקוחות. Kora עושה אופטימיזציה אמיתית למערכות ומכונות ה-CNC שלכם – כדי להוציא מהן את המקסימום בלי לקרוע את החומרה.</p>
      
      <div class="roi-box">
        <div class="roi-row">
          <span class="roi-label">קיצור זמן עיבוד ממוצע לחלק:</span>
          <span class="roi-value positive">חוסכים 25% - 40% מהזמן</span>
        </div>
        <div class="roi-row">
          <span class="roi-label">הארכת חיי כלי החיתוך:</span>
          <span class="roi-value positive">הכלי מחזיק מעמד פי 2 יותר</span>
        </div>
      </div>
    </div>
    
    <!-- דשבורד הדמיה דינמי -->
    <div class="comparison-card dynamic-dashboard">
      <div class="dashboard-header-text">סימולציית מהירות ועומס בזמן אמת</div>
      
      <!-- סטטוס 1: המצב הרגיל מהמפעל -->
      <div class="sim-row">
        <div class="sim-info">
          <span class="sim-title">לפני אופטימיזציה (סטנדרט)</span>
          <span class="sim-status bad-pulse">פידים לא יציבים / עומס חריג על הציר</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar unoptimized-bar"></div>
        </div>
        <div class="sim-meta">
          <span>זמן ריצה: <b>12:40 דקות</b></span>
          <span class="negative-text">ניצול חומרה: 55%</span>
        </div>
      </div>

      <!-- סטטוס 2: אחרי הטיפול של קורה -->
      <div class="sim-row active-sim">
        <div class="sim-info">
          <span class="sim-title">אחרי הכיול של Kora</span>
          <span class="sim-status good-pulse">תנועה רציפה וחלקה (Constant Feed)</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar optimized-bar"></div>
        </div>
        <div class="sim-meta">
          <span>זמן ריצה: <b class="positive-text">7:15 דקות</b></span>
          <span class="positive-text">יעילות שיא: 98%</span>
        </div>
      </div>

      <div class="dashboard-divider"></div>

      <!-- נקודות מפתח בתכל'ס -->
      <ul class="dynamic-bullets-list">
        <li><span>קצב עבודה:</span> <strong class="good-text">תנועה מהירה פי 1.8</strong>, בלי רעידות ובלי 'קפיצות' של הצירים.</li>
        <li><span>שמירה על הציוד:</span> <strong class="good-text">אפס זעזועים מכניים</strong>, הראש והספינדל עובדים שקט וקריר.</li>
      </ul>
    </div>
  </section>

  <section class="capabilities-section">
    <h2>איך אנחנו מרימים את הרווחיות ברצפת הייצור?</h2>
    <div class="grid" id="benefits-grid"></div>
  </section>
</main>
`;

const gridContainer = document.querySelector<HTMLDivElement>('#benefits-grid')!;
gridContainer.innerHTML = koraBenefits
  .map(benefit => `
    <div class="cap-card">
      <h3>${benefit.title}</h3>
      <p>${benefit.description}</p>
    </div>
  `).join('');