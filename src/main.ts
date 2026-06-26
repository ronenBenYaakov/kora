// src/main.ts
import './style.css'
import heroImg from './assets/hero.png'

interface ValueProposition {
  title: string;
  description: string;
}

// התועלות העסקיות הברורות שהלקוח מקבל
const koraBenefits: ValueProposition[] = [
  {
    title: "חיתוך דרמטי בעלויות הענן",
    description: "אנחנו ממתבים את התוכנה שלכם לעבודה יעילה פי כמה עם השרתים הקיימים, מה שמאפשר לכם לצמצם את תשתית ה-AWS/Azure ולחסוך עשרות אחוזים מדי חודש."
  },
  {
    title: "אפס קריסות בעומסי שיא",
    description: "מערכות שלא עומדות בלחץ מפסידות כסף ולקוחות. התשתית שלנו מחזקת את יציבות המוצר שלכם ומבטיחה שהאתר או האפליקציה יישארו באוויר גם ביום העומס הכי גדול בשנה."
  },
  {
    title: "מהירות תגובה מיידית ללקוח",
    description: "אפליקציה מהירה יותר שווה חווית משתמש טובה יותר ויותר מכירות. אנחנו מקצרים את זמני הטעינה של המערכות שלכם לרמת האלפית השניה."
  }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="kora-header container">
  <div class="brand">KORA<span>.</span></div>
  <button class="contact-btn">תיאום שיחת ייעוץ</button>
</header>

<main class="container">
  <section class="hero-section">
    <div class="hero-content">
      <h1>הופכים את התוכנה שלכם למהירה ויציבה פי 10.</h1>
      <p>חברות טכנולוגיה רבות סובלות מאיטיות, קריסות בעומסים וחשבוניות ענן מנופחות. Kora בונה מחדש את יסודות התשתית שלכם כדי להעניק למוצר מהירות מקסימלית, יציבות מוחלטת וחיסכון מיידי בהוצאות.</p>
      
      <!-- תיבת נתונים עסקית שמדברת אל הקונה -->
      <div class="roi-box">
        <div class="roi-row">
          <span class="roi-label">ממוצע שיפור מהירות מערכת:</span>
          <span class="roi-value positive">מהיר פי 4.8</span>
        </div>
        <div class="roi-row">
          <span class="roi-label">חיסכון ממוצע בהוצאות שרתים وعנן:</span>
          <span class="roi-value positive">35% - 50% חיסכון</span>
        </div>
        <div class="roi-row">
          <span class="roi-label">זמן התקנת התשתית:</span>
          <span class="roi-value">אינטגרציה ללא השבתה</span>
        </div>
      </div>
    </div>
    
    <div class="hero-graphic">
      <img src="${heroImg}" width="260" height="275" alt="Kora Performance Graph Overview">
    </div>
  </section>

  <section class="capabilities-section">
    <h2>למה חברות מובילות בוחרות ב-Kora?</h2>
    <div class="grid" id="benefits-grid">
      <!-- הזרקה דינמית של התועלות -->
    </div>
  </section>
</main>
`;

// הזרקת התועלות העסקיות לתוך הגריד
const gridContainer = document.querySelector<HTMLDivElement>('#benefits-grid')!;
gridContainer.innerHTML = koraBenefits
  .map(benefit => `
    <div class="cap-card">
      <h3>${benefit.title}</h3>
      <p>${benefit.description}</p>
    </div>
  `).join('');