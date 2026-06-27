// src/main.ts
import './style.css'

interface ValueProposition {
  title: string;
  description: string;
}

// תועלות ברורות למנהלי מפעלים, בתי מלאכה ובעלי מכונות
const koraBenefits: ValueProposition[] = [
  {
    title: "קיצור דרמטי בזמני מחזור (Cycle Time)",
    description: "אנחנו מייעלים את פקודות ההרצה והקוד של המכונות שלכם. התוצאה: המכונה זזה חכם ומהר יותר, מייצרת יותר חלקים בכל משמרת, ומגדילה את תפוקת המפעל באופן מיידי."
  },
  {
    title: "הגנה מפני שברים והשבתות פתאומיות",
    description: "כיול נכון של עומסים ומהירויות מונע שחיקה מואצת של ספינדלים, שבירת כרסומים ונזק לצירים. אנחנו דואגים שהמכונות שלכם יעבדו חלק, ללא השבתות יקרות באמצע העבודה."
  },
  {
    title: "חיסכון בחשמל ובבלאי רכיבים יקרים",
    description: "עבודה לא אופטימלית מאמצת את המנועים ומקצרת את חיי המכונה. האופטימיזציה שלנו מורידה את צריכת האנרגיה ומאריכה את החיים של חלקי החילוף היקרים ביותר שלכם."
  }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="kora-header container">
  <div class="brand">KORA<span>.</span></div>
  <button class="contact-btn">שדרג את תפוקת המכונות שלי</button>
</header>

<main class="container">
  <section class="hero-section">
    <div class="hero-content">
      <h1>המכונות שלכם. מייצרות יותר, נשחקות פחות, מרוויחות יותר.</h1>
      <p>בעלי בתי מלאכה ומפעלים רבים סובלים מזמני ייצור ארוכים מדי, בלאי גבוה של כלי חיתוך, ועיכובים באספקת הזמנות ללקוחות. Kora מבצעת אופטימיזציה מקצועית למערכות ומכונות ה-CNC שלכם – כדי להפיק מהן מהירות מקסימלית, דיוק מוחלט ואפס תקלות מכניות.</p>
      
      <div class="roi-box">
        <div class="roi-row">
          <span class="roi-label">קיצור ממוצע בזמני ייצור ומחזור חלק:</span>
          <span class="roi-value positive">חיסכון של 25% - 40% בזמן</span>
        </div>
        <div class="roi-row">
          <span class="roi-label">הפחתה בבלאי כלים וחלקי חילוף:</span>
          <span class="roi-value positive">הארכת חיי הכלי פי 2</span>
        </div>
      </div>
    </div>
    
    <!-- Simple, wide comparison table targeting physical machinery operations -->
    <div class="comparison-card">
      <h3>מה ההבדל ברצפת הייצור שלך?</h3>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>המכונות שלך כיום</th>
            <th class="highlight-header">המכונות שלך אחרי Kora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bad">🔴 תנועות לא יעילות, קצב ייצור איטי</td>
            <td class="good">🟢 תנועה אופטימלית, זמני מחזור קצרים</td>
          </tr>
          <tr>
            <td class="bad">🔴 בלאי מואץ, שבירת כרסומים וספינדלים</td>
            <td class="good">🟢 עבודה חלקה ושמירה על חומר הגלם והכלי</td>
          </tr>
          <tr>
            <td class="bad">🔴 צווארי בקבוק בהזמנות בגלל קצב איטי</td>
            <td class="good">🟢 אספקה מהירה יותר ויכולת לקחת עוד עבודות</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="capabilities-section">
    <h2>איך אנחנו מגדילים את הרווחיות של רצפת הייצור?</h2>
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