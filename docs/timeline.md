# Project Timeline & Milestones

Interactive timeline visualization of project milestones and key deliverables for the Cloud & Infrastructure Team.

<div class="timeline-controls">
    <div class="filter-buttons">
        <button class="filter-btn active" data-team="all">All Teams</button>
        <button class="filter-btn" data-team="finops">CEC FINOPS</button>
        <button class="filter-btn" data-team="cloud-native">CLOUD NATIVE</button>
        <button class="filter-btn" data-team="tpv">TPV</button>
        <button class="filter-btn" data-team="slingshot">CEC SLINGSHOT</button>
        <button class="filter-btn" data-team="italy-devops">ITALY DEVOPS</button>
    </div>
    <div class="view-toggle">
        <button class="view-btn active" data-view="timeline">Timeline View</button>
        <button class="view-btn" data-view="gantt">Gantt View</button>
    </div>
</div>

<div class="timeline-container">
    <div class="timeline" id="project-timeline">
        <!-- Timeline items will be dynamically generated -->
    </div>
</div>

<div class="milestone-summary">
    <div class="summary-cards">
        <div class="summary-card">
            <div class="card-icon">🎯</div>
            <div class="card-content">
                <h3>Active Projects</h3>
                <span class="metric-value" id="active-projects">12</span>
            </div>
        </div>
        <div class="summary-card">
            <div class="card-icon">⏰</div>
            <div class="card-content">
                <h3>Upcoming Milestones</h3>
                <span class="metric-value" id="upcoming-milestones">8</span>
            </div>
        </div>
        <div class="summary-card">
            <div class="card-icon">✅</div>
            <div class="card-content">
                <h3>Completed This Month</h3>
                <span class="metric-value" id="completed-month">15</span>
            </div>
        </div>
        <div class="summary-card">
            <div class="card-icon">🚨</div>
            <div class="card-content">
                <h3>At Risk</h3>
                <span class="metric-value" id="at-risk">3</span>
            </div>
        </div>
    </div>
</div>

<!-- ## Key Milestones by Quarter

### Q4 2025
- **Cloud Migration Phase 2** - December 2025
- **FinOps Cost Optimization** - November 2025  
- **Security Compliance Audit** - October 2025

### Q1 2026
- **Italy Infrastructure Upgrade** - March 2026
- **Slingshot Platform v2.0** - February 2026
- **TPV Automation Framework** - January 2026

## Project Status Legend

<div class="status-legend">
    <div class="legend-item">
        <span class="status-dot completed"></span>
        <span>Completed</span>
    </div>
    <div class="legend-item">
        <span class="status-dot completed"></span>
        <span>In Progress</span>
    </div>
    <div class="legend-item">
        <span class="status-dot completed"></span>
        <span>Planned</span>
    </div>
    <div class="legend-item">
        <span class="status-dot completed"></span>
        <span>At Risk</span>
    </div>
    <div class="legend-item">
        <span class="status-dot completed"></span>
        <span>Delayed</span>
    </div>
</div>

## Quick Actions

<div class="quick-actions">
    <button class="action-btn" onclick="addMilestone()">
        <i class="fas fa-plus"></i> Add Milestone
    </button>
    <button class="action-btn" onclick="exportTimeline()">
        <i class="fas fa-download"></i> Export Timeline
    </button>
    <button class="action-btn" onclick="refreshData()">
        <i class="fas fa-sync"></i> Refresh Data
    </button>
</div>

<script src="../assets/js/timeline.js"></script>
<link rel="stylesheet" href="../assets/css/timeline.css"> -->