import IconCloud from './Componente';
import './skill.css'

const Skill = () => {
    return ( 
        <div className="skil">
<p className="about-heading">About Me</p>
            <div className='card'>
                <div className='leftCard'>
                    <p>Hello, I'm Roshini Rangani👋</p>

<p>
I am a Data and Business Analyst with 3+ years of experience driving insights that support data-driven decision-making. I specialize in transforming complex, unstructured data into structured insights that help businesses make informed and strategic decisions.
</p>
<p>
I work with SQL (joins, CTEs, window functions), Python (pandas, NumPy, scikit-learn), R, and BigQuery to analyze, model, and interpret data. I have hands- on experience building interactive dashboards and analytical applications using Tableau, Power BI, Google Looker Studio, R Shiny, and Streamlit. My expertise includes ETL processes, data modeling, regression, classification, clustering, predictive modeling, and A/B testing, along with experience working in cloud environments(AWS/Azure).
</p>
<p>
I am currently pursuing my master’s in information technology at Webster University, USA, with coursework in Databases and Data Warehousing, Data Modeling, Time Series Analysis, Predictive Analytics, AI & Machine Learning, and Cloud Computing. I also hold a bachelor’s degree in computer science and engineering from India, with a strong foundation in Data Structures, Artificial Intelligence, Machine Learning and Web Technologies. I approach every challenge with a focus on scalability, efficiency, collaboration, and real-world impact.
</p>


                </div>
                <div className='skil' id="about-skills">
                    <IconCloud />
                </div>
            </div>
        </div>

     );
}
 
export default Skill;