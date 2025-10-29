# Organizational Chart

## Cloud Infrastructure Team Structure

<div class="org-chart">
  <div class="level-1">
    <div class="leadership-box">
      <h3>🎯 CLOUD INFRASTRUCTURE</h3>
      <p><strong>Sample Lead 1</strong><br>Division Head</p>
    </div>
  </div>

  <div class="level-2">
    <div class="division-box">
      <h4>💻 TECHNOLOGY PRODUCTS</h4>
      <p>Core Engineering Division</p>
      <div class="subteams">
        <span class="subteam">CEC FINOPS</span>
        <span class="subteam">CLOUD NATIVE</span>
        <span class="subteam">TPV</span>
        <span class="subteam">CEC SLINGSHOT</span>
        <span class="subteam">ITALY DEVOPS</span>
      </div>
    </div>

    <div class="division-box">
      <h4>🌐 NETWORK OPERATIONS</h4>
      <p>Infrastructure & Connectivity</p>
    </div>

    <div class="division-box">
      <h4>🇮🇹 ITALY INFRASTRUCTURE</h4>
      <p>Regional Operations</p>
    </div>
  </div>

  <div class="level-3">
    <div class="division-box">
      <h4>🇬🇧 UK INFRASTRUCTURE</h4>
      <p>Regional Operations</p>
    </div>

    <div class="division-box">
      <h4>🇩🇪 GERMAN DEVOPS</h4>
      <p>Automation & Deployment</p>
    </div>

    <div class="division-box">
      <h4>🇩🇪 GERMANY INFRASTRUCTURE</h4>
      <p>Regional Operations</p>
    </div>
  </div>

  <div class="level-4">
    <div class="specialist-box">
      <h4>🔧 NETWORK SPECIALISTS</h4>
      <ul>
        <li>Sample Network 1</li>
        <li>Sample Network 2</li>
      </ul>
    </div>

    <div class="support-box">
      <h4>🎧 TECHNICAL SUPPORT</h4>
      <p><strong>Sample Support 1</strong><br>Service Delivery</p>
    </div>
  </div>
</div>

<style>
.org-chart {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.level-1, .level-2, .level-3, .level-4 {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.leadership-box {
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
  border: 3px solid #1e293b;
  min-width: 280px;
}

.division-box {
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(15, 118, 110, 0.3);
  border: 2px solid #134e4a;
  min-width: 220px;
  max-width: 280px;
}

.specialist-box {
  background: linear-gradient(135deg, #ea580c, #fb923c);
  color: white;
  padding: 18px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(234, 88, 12, 0.3);
  border: 2px solid #9a3412;
  min-width: 200px;
}

.support-box {
  background: linear-gradient(135deg, #eab308, #fbbf24);
  color: #1f2937;
  padding: 18px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(234, 179, 8, 0.3);
  border: 2px solid #a16207;
  min-width: 200px;
}

.org-chart h3 {
  margin: 0 0 10px 0;
  font-size: 1.3em;
  font-weight: bold;
}

.org-chart h4 {
  margin: 0 0 8px 0;
  font-size: 1.1em;
  font-weight: bold;
}

.org-chart p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.9;
}

.subteams {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.subteam {
  background: rgba(124, 58, 237, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  border: 1px solid #5b21b6;
}

.org-chart ul {
  text-align: left;
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.org-chart li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .level-1, .level-2, .level-3, .level-4 {
    flex-direction: column;
    align-items: center;
  }
  
  .leadership-box, .division-box, .specialist-box, .support-box {
    min-width: 250px;
    max-width: 300px;
  }
}
</style>