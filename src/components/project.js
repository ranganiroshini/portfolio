import "./project.css"
import ProjectCard from "./ProjectCard";

const Project = () => {
    const data = [
       {
  title: 'Stone Aggregates Business Intelligence & Decision Analytics',
  color: '#fde7ee',
  border: '#f3b6c8',
  description: [
    'Developed an end-to-end business intelligence and decision analytics platform to analyze sales, pricing, and demand patterns for a real-world stone aggregate family business using structured operational data.',
    'Built an interactive analytics application using Python and Streamlit, enabling stakeholders to explore sales performance, revenue metrics, and operational KPIs through dynamic visualizations.',
    'Engineered a decision-support analytics layer integrating a Price Impact Simulator (what-if analysis) with Conversational Business Intelligence, enabling natural language queries and scenario-based evaluation of pricing, demand, and revenue outcomes.',
    'Designed scalable data workflows and reusable analytical components to support ongoing reporting, scenario analysis, and data-driven business decision-making.'
  ],
  tech: [
    { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Streamlit', badge: 'https://img.shields.io/badge/Streamlit-FF4F7B?style=for-the-badge&logo=streamlit&logoColor=white' },
    {
  name: 'MySQL',
  badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white'
}
,
    { name: 'Microsoft Excel', badge: 'https://img.shields.io/badge/Microsoft%20Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white' },

    { name: 'Conversational AI', badge: 'https://img.shields.io/badge/Conversational%20AI-000000?style=for-the-badge&logo=openai&logoColor=white' }
  ],
  git: 'https://github.com/ranganiroshini/stone-aggregates-business-intelligence',
  demo: 'https://stone-aggregates-business-intelligence-cwnjxyyesmqz98nrcepv39.streamlit.app/'
},
        {
  title: "PCOS Women’s Health Data Analysis",
  color: "#CFEDE0",          // light pastel pista
  border: "#9BC7B8",
  description: [
    "Developed a real-world healthcare data analytics project to analyze PCOS (Polycystic Ovary Syndrome) patterns using structured clinical and lifestyle data.",
    "Performed extensive data cleaning and standardization using Python and Excel to prepare datasets for cloud-based analysis.",
    "Designed and executed advanced SQL queries on a cloud-hosted PostgreSQL database using AWS RDS to study hormonal imbalance, menstrual irregularities, fertility indicators, and lifestyle factors.",
    "Built an interactive Tableau dashboard to visualize PCOS distribution, hormonal differences, and lifestyle impact, enabling data-driven healthcare insights."
  ],
  tech: [
    { name: "SQL (PostgreSQL)", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "AWS RDS", badge: "https://img.shields.io/badge/AWS%20RDS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { name: "Tableau", badge: "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white" },
    { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  ],
  git: "https://github.com/ranganiroshini/PCOS-ANALYSIS",
  demo: "https://public.tableau.com/app/profile/roshini.rangani/viz/PCOSANALYSIS-ROSHINIRANGANI/Dashboard1?publish=yes"
},

{
  title: 'Telecom Customer Churn Prediction & Retention Strategy',
  color: '#EAF6FF',
  border: '#90CAF9',
  description: [
    'Developed an end-to-end customer churn prediction and retention analytics solution for the telecom domain using real-world customer data.',
    'Built an interactive R Shiny dashboard to predict churn probability, visualize key customer risk factors, and support proactive retention decisions.',
    'Trained and evaluated a Logistic Regression model using tidymodels, achieving strong performance across Accuracy, Precision, Recall, and F1-score metrics.',
    'Applied Explainable AI techniques (SHAP) to identify and interpret top churn drivers such as tenure, contract type, and monthly charges.',
    'Translated churn predictions into customer personas (High, Moderate, Low Risk) and designed data-driven business recommendations to reduce churn by up to 15%.'
  ],
  tech: [
    { name: 'R', badge: 'https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white' },
    { name: 'R Shiny', badge: 'https://img.shields.io/badge/Shiny-75AADB?style=for-the-badge&logo=rstudio&logoColor=white' },
    { name: 'Tidymodels', badge: 'https://img.shields.io/badge/Tidymodels-1A162D?style=for-the-badge' },
    { name: 'Explainable AI (SHAP)', badge: 'https://img.shields.io/badge/SHAP-000000?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'ggplot2', badge: 'https://img.shields.io/badge/ggplot2-E41A1C?style=for-the-badge' }
  ],
  git: 'https://github.com/ranganiroshini/telco-churn-dashboard',
  demo: 'https://roshinirangani.shinyapps.io/telco_churn_complete_dashboard-RR/'
},

        {
  title: 'Sephora Skincare Insight Engine',
  color: '#F1ECF9',
  border: '#C7B9E2',
  description: [
    'Conducted an end-to-end skincare product analytics project using Sephora product data to analyze ingredient composition, pricing patterns, and brand positioning across multiple product categories.',
    'Processed and cleaned raw cosmetic datasets using Python (Pandas, NumPy) to enable structured analysis of ingredients, pricing, rankings, and product categories.',
    'Built interactive Power BI dashboards to visualize ingredient frequency, average pricing by category, brand-level insights, and product segmentation across budget, mid-range, and luxury tiers.',
    'Generated actionable consumer and product insights by identifying dominant ingredients, pricing trends, and brand concentration patterns to support data-driven product and marketing decisions.'
  ],
  tech: [
    { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Power BI', badge: 'https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black' },
    { name: 'Pandas', badge: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white' },
    { name: 'NumPy', badge: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white' }
  ],
  git: 'https://github.com/ranganiroshini/Skincare-Product-Analysis',
  demo: 'https://app.powerbi.com/groups/me/reports/f52952a6-8d76-44f9-921b-279b785bfe5e/c96aee169375893428c0'
},

        {
  title: 'Instagram Reach Forecasting',
  color: '#F3EADF',
  border: '#D8CFC4',
  description: [
    'Developed a time series forecasting solution to analyze and predict Instagram reach trends using historical engagement data.',
    'Performed trend analysis, seasonal decomposition, and day-of-week performance analysis to identify patterns in audience reach.',
    'Built and evaluated a SARIMA (Seasonal ARIMA) model to forecast future reach, capturing both trend and seasonality effects.',
    'Visualized historical and forecasted reach using Python visualizations to support data-driven content and growth strategy decisions.'
  ],
  tech: [
    { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Time Series (SARIMA)', badge: 'https://img.shields.io/badge/SARIMA-6A1B9A?style=for-the-badge' },
    { name: 'Pandas', badge: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white' },
    { name: 'Statsmodels', badge: 'https://img.shields.io/badge/Statsmodels-3E4E88?style=for-the-badge' },
    { name: 'Matplotlib', badge: 'https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge' }
  ],
  git: 'https://github.com/ranganiroshini/Instagram-reach-analysis-time-series',
  demo: 'https://medium.com/@ranganiroshini4/instagram-reach-analysis-and-forecasting-using-time-series-in-python-30d6b0c307c8'
}
    ]

    return(
        <div className="projects">
  <div className="projects-header">
    <p className="projects-heading">Projects</p>
  </div>
  <ProjectCard data={data} />
</div>

    );
};

export default Project;