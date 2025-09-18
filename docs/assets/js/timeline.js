// Timeline Visualization JavaScript

// Sample milestone data
const milestones = [
    {
        id: 1,
        title: "Cloud Migration Phase 1 Completion",
        description: "Successfully migrated 50% of applications to AWS cloud infrastructure with zero downtime.",
        date: "2025-08-15",
        team: "cloud-native",
        status: "completed",
        priority: "high",
        assignee: "Prasanth Anandan"
    },
    {
        id: 2,
        title: "FinOps Cost Optimization Initiative",
        description: "Implement automated cost monitoring and optimization across all cloud resources.",
        date: "2025-09-30",
        team: "finops",
        status: "in-progress",
        priority: "high",
        assignee: "Kumanan Gunasekaran"
    },
    {
        id: 3,
        title: "TPV Automation Framework Setup",
        description: "Deploy automated testing framework for product validation processes.",
        date: "2025-10-15",
        team: "tpv",
        status: "planned",
        priority: "medium",
        assignee: "Sebi Sebastian"
    },
    {
        id: 4,
        title: "Slingshot Platform v2.0 Release",
        description: "Major platform upgrade with enhanced features and improved performance.",
        date: "2025-11-20",
        team: "slingshot",
        status: "in-progress",
        priority: "high",
        assignee: "Nivas Devendiran"
    },
    {
        id: 5,
        title: "Italy Infrastructure Monitoring",
        description: "Deploy comprehensive monitoring solution for Italy-based infrastructure.",
        date: "2025-10-01",
        team: "italy-devops",
        status: "at-risk",
        priority: "high",
        assignee: "Agilan Kaamash"
    },
    {
        id: 6,
        title: "Security Compliance Audit",
        description: "Complete annual security compliance audit and remediation.",
        date: "2025-12-10",
        team: "cloud-native",
        status: "planned",
        priority: "critical",
        assignee: "Bhargav Mannem"
    },
    {
        id: 7,
        title: "DevOps Pipeline Optimization",
        description: "Optimize CI/CD pipelines for faster deployment cycles.",
        date: "2025-09-25",
        team: "italy-devops",
        status: "in-progress",
        priority: "medium",
        assignee: "Rampravin A R"
    },
    {
        id: 8,
        title: "Cloud Native Architecture Review",
        description: "Comprehensive review and optimization of cloud-native architecture.",
        date: "2026-01-15",
        team: "cloud-native",
        status: "planned",
        priority: "medium",
        assignee: "Prasanth Anandan"
    }
];

// Timeline management class
class TimelineManager {
    constructor() {
        this.currentFilter = 'all';
        this.currentView = 'timeline';
        this.filteredMilestones = milestones;
        this.init();
    }

    init() {
        this.renderTimeline();
        this.setupEventListeners();
        this.updateSummaryCards();
        this.sortMilestonesByDate();
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.team;
                this.filterMilestones();
            });
        });

        // View toggle buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.renderTimeline();
            });
        });
    }

    filterMilestones() {
        if (this.currentFilter === 'all') {
            this.filteredMilestones = milestones;
        } else {
            this.filteredMilestones = milestones.filter(milestone => 
                milestone.team === this.currentFilter
            );
        }
        this.renderTimeline();
        this.updateSummaryCards();
    }

    sortMilestonesByDate() {
        this.filteredMilestones.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    renderTimeline() {
        const timelineContainer = document.getElementById('project-timeline');
        timelineContainer.innerHTML = '';

        this.sortMilestonesByDate();

        this.filteredMilestones.forEach((milestone, index) => {
            const timelineItem = this.createTimelineItem(milestone, index);
            timelineContainer.appendChild(timelineItem);
        });

        // Add animation delay
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }

    createTimelineItem(milestone, index) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.dataset.team = milestone.team;

        const isEven = index % 2 === 0;
        
        item.innerHTML = `
            <div class="timeline-content">
                <h3 class="timeline-title">${milestone.title}</h3>
                <p class="timeline-description">${milestone.description}</p>
                <div class="timeline-meta">
                    <span class="timeline-date">${this.formatDate(milestone.date)}</span>
                    <span class="timeline-team ${milestone.team}">${this.getTeamName(milestone.team)}</span>
                    <span class="timeline-status ${milestone.status}">${this.getStatusText(milestone.status)}</span>
                    <span class="timeline-assignee">👤 ${milestone.assignee}</span>
                </div>
            </div>
            <div class="timeline-marker ${milestone.status}"></div>
        `;

        return item;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    getTeamName(team) {
        const teamNames = {
            'finops': 'CEC FINOPS',
            'cloud-native': 'CLOUD NATIVE',
            'tpv': 'TPV',
            'slingshot': 'CEC SLINGSHOT',
            'italy-devops': 'ITALY DEVOPS'
        };
        return teamNames[team] || team.toUpperCase();
    }

    getStatusText(status) {
        const statusTexts = {
            'completed': 'Completed',
            'in-progress': 'In Progress',
            'planned': 'Planned',
            'at-risk': 'At Risk',
            'delayed': 'Delayed'
        };
        return statusTexts[status] || status;
    }

    updateSummaryCards() {
        const stats = this.calculateStats();
        
        document.getElementById('active-projects').textContent = stats.activeProjects;
        document.getElementById('upcoming-milestones').textContent = stats.upcomingMilestones;
        document.getElementById('completed-month').textContent = stats.completedThisMonth;
        document.getElementById('at-risk').textContent = stats.atRisk;
    }

    calculateStats() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const stats = {
            activeProjects: this.filteredMilestones.filter(m => 
                m.status === 'in-progress' || m.status === 'planned'
            ).length,
            upcomingMilestones: this.filteredMilestones.filter(m => {
                const milestoneDate = new Date(m.date);
                return milestoneDate > now && m.status !== 'completed';
            }).length,
            completedThisMonth: this.filteredMilestones.filter(m => {
                const milestoneDate = new Date(m.date);
                return milestoneDate.getMonth() === currentMonth && 
                       milestoneDate.getFullYear() === currentYear && 
                       m.status === 'completed';
            }).length,
            atRisk: this.filteredMilestones.filter(m => m.status === 'at-risk').length
        };

        return stats;
    }

    addMilestone(milestoneData) {
        const newMilestone = {
            id: milestones.length + 1,
            ...milestoneData
        };
        milestones.push(newMilestone);
        this.filterMilestones();
    }

    exportTimeline() {
        const data = {
            milestones: this.filteredMilestones,
            exportDate: new Date().toISOString(),
            filter: this.currentFilter
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `timeline-export-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    refreshData() {
        // Simulate data refresh
        const refreshBtn = document.querySelector('[onclick="refreshData()"]');
        const originalText = refreshBtn.innerHTML;
        
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
        refreshBtn.disabled = true;
        
        setTimeout(() => {
            this.renderTimeline();
            this.updateSummaryCards();
            refreshBtn.innerHTML = originalText;
            refreshBtn.disabled = false;
            
            // Show success message
            this.showNotification('Timeline data refreshed successfully!', 'success');
        }, 1500);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#28a745' : '#007bff'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Global functions for button actions
function addMilestone() {
    const title = prompt('Enter milestone title:');
    if (!title) return;
    
    const description = prompt('Enter milestone description:');
    const date = prompt('Enter target date (YYYY-MM-DD):');
    const team = prompt('Enter team (finops/cloud-native/tpv/slingshot/italy-devops):');
    const assignee = prompt('Enter assignee name:');
    
    if (title && description && date && team && assignee) {
        timelineManager.addMilestone({
            title,
            description,
            date,
            team,
            status: 'planned',
            priority: 'medium',
            assignee
        });
        timelineManager.showNotification('Milestone added successfully!', 'success');
    }
}

function exportTimeline() {
    timelineManager.exportTimeline();
    timelineManager.showNotification('Timeline exported successfully!', 'success');
}

function refreshData() {
    timelineManager.refreshData();
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.timelineManager = new TimelineManager();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);