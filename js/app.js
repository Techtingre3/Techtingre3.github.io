const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");


function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});


// Get the modal
var modal = document.getElementById("portfolioModal");
var main = document.getElementById("main");
var footer = document.getElementById("footer");
var projectdetails = document.getElementById("project-details")


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.display = "block";
  }
}


var portfolioItems = document.querySelectorAll('.grid-item');

portfolioItems.forEach(function (item) {
  if (item.classList.contains('mechanical-engineering')) {
    item.addEventListener('click', function () {
      var title = this.querySelector('.img-description h3').innerText;
      //var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `
      <div class="project">
      <img style="width: 55% !important;left: 25%;" src="./img/cpv/cpv0.png" alt="" />     
      <h4>Objective</h4>
      <p> To develop and implement a control system to enhance vehicle stability and safety by regulating inputs based on real-time feedback.</p>
      
      <h4>Project Description</h4>
      
      <h5>Overview</h5>
      <p>The project aimed to design a controller to manage vehicle stability by adjusting inputs such as throttle and brakes based on real-time data from sensors measuring speed, acceleration, and steering angle. The solution implemented involved mathematical modeling, control algorithm development, and the integration of a microcontroller. The outcome was a successfully tested prototype demonstrating improved stability and safety.</p>
      
      <h4>Tools and Software</h4>
      <ul>
          <li>MATLAB</li>
          <li>Simulink</li>
          <li>Arduino IDE</li>
          <li>Vibrationmeter App</li>
          <li>SolidWorks</li>
      </ul>
      
      <h4>Technical Details</h4>
      
      <h5>Design Process</h5>
      <img style="width: 55% !important;left: 25%;" src="./img/cpv/cpv1.png" alt="" />
      <ul>
          <li>Initial sketches and CAD models in SolidWorks.</li>
          <li>Iterations based on feedback and preliminary tests.</li>
          <li>Final design incorporated sensors and actuators integrated with a microcontroller for real-time data processing.</li>
      </ul>
      
      <h5>Analysis</h5>
      <div class="image-container">
          <img src="./img/cpv/cpv2.png" alt="CPV Image 2" />
          <img src="./img/cpv/cpv3.png" alt="CPV Image 3" />
      </div>
      <ul>
          <li>Simulations and analyses performed using MATLAB and Simulink.</li>
          <li>Determination of maximum tilt angles during turns.</li>
          <li>Evaluation of lateral forces and their effect on stability.</li>
          <li>Analysis of vehicle response to acceleration and deceleration using accelerometer data.</li>
      </ul>
      
      <h5>Prototyping</h5>      
      <p>Prototyping involved constructing a scale model of the vehicle equipped with sensors and actuators. Testing was conducted to measure vertical and lateral accelerations under various driving conditions. Data were collected using the Vibrationmeter app and analyzed to refine the control algorithms.</p>
      
      <h4>Key Deliverables</h4>
      <ul>
          <li><strong>Plots and Graphs:</strong> Contour plots showing the tilt angles and lateral forces during turns, stress/strain diagrams illustrating the forces experienced by the vehicle's components, velocity profiles depicting the vehicle's speed variations during different maneuvers.</li>
          <li><strong>Data and Calculations:</strong> Maximum acceleration of 1 m/s² during acceleration, maximum deceleration of 2 m/s² during braking, impact analysis showing vertical acceleration peaks of ~3 m/s² over bumps, indicating effective damping.</li>
          <li><strong>Images:</strong> CAD models of the vehicle prototype, test setup images showing sensor placements, graphical representations of test results.</li>
      </ul>
      
      <h4>Challenges and Solutions</h4>
      
      <h5>Challenges</h5>
      <img style="width: 55% !important;left: 25%;" src="./img/cpv/cpv4.png" alt="" />
      <ul>
          <li>Data noise: High levels of noise in accelerometer data due to limitations of mobile phone sensors.</li>
          <li>Control algorithm tuning: Ensuring the controller responded accurately to rapid changes in vehicle dynamics.</li>
      </ul>
      
      <h5>Solutions</h5>
      <ul>
          <li>Data filtering: Implemented advanced filtering techniques to reduce noise and improve data accuracy.</li>
          <li>Algorithm refinement: Conducted extensive testing and iteration to fine-tune the control algorithms, ensuring robust performance under various conditions.</li>
      </ul>
      
      <h4>Outcome and Impact</h4>
      
      <h5>Results</h5>
      <ul>
          <li>Improved vehicle handling and response during sharp turns and sudden maneuvers.</li>
          <li>Enhanced comfort levels for passengers by minimizing vertical accelerations over bumps.</li>
      </ul>
      
      <h5>Impact</h5>
      <ul>
          <li>Provided a foundation for advanced driver-assistance systems (ADAS).</li>
          <li>Contributed to the development of autonomous vehicle control systems.</li>
          <li>Offered insights for future research in vehicle dynamics and control.</li>
      </ul>
      
      <h4>Reflection</h4>
      
      <h5>Learnings</h5>
      <ul>
          <li>Insights into control systems design, data analysis, and real-time system integration.</li>
          <li>The importance of robust data processing and iterative testing in developing reliable control algorithms.</li>
      </ul>
      
      <h5>Future Applications</h5>
      <ul>
          <li>Developing more sophisticated ADAS features.</li>
          <li>Enhancing the performance of autonomous vehicles.</li>
          <li>Exploring new methods for real-time vehicle dynamics control and optimization.</li>
      </ul>
    </div>
      
      <style>
      .project {
          background: #fff;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .project h2 {
          margin-top: 0;
      }
      .project img {
          border-radius: 8px;
          margin: 20px 0;
          display: block;
          position: relative;
          height: auto;
          width: 300px;
          left: 35%;
      }
          .image-container {
                display: flex;
                justify-content: center;
                gap: 20px; /* Adjust the gap between images as needed */
              }
            .image-container img {
              border-radius: 8px;
              margin: 20px 0;
              height: auto;
              width: 300px;
              left:0
          }
        
          .project .details {
              display: flex;
          justify-content: space-between;
      }
      .project .details div {
          width: 30%;
      }
      .project .details strong {
          display: block;
          margin-bottom: 10px;
      }
      .project .description {
          margin: 20px 0;
      }
      ul {
          list-style-type: disc;
          padding-left: 20px;
      }
      </style>
      
      `;

      modal.style.display = "flex";
      main.style.display = "none";
      footer.style.display = "none";
      projectdetails.style.display = "flex"
    });
  };

  if (item.classList.contains('movie-recommendation')) {
    item.addEventListener('click', function () {
      var title = this.querySelector('.img-description h3').innerText;
      //var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;

      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `<style>
      
      .project {
          background: #fff;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .project h2 {
          margin-top: 0;
      }
      .project img {          
          border-radius: 8px;
          margin: 20px 0;
          display: block;
          position: relative;
          height: auto;
          width: 300px;
          left: 35%;
          
      }
      .project .details {
          display: flex;
          justify-content: space-between;
      }
      .project .details div {
          width: 30%;
      }
      .project .details strong {
          display: block;
          margin-bottom: 10px;
      }
      .project .description {
          margin: 20px 0;
      }
      ul {
          list-style-type: disc;
          padding-left: 20px;
      }
  </style>


      <div class="project">
          <img style="width: 55% !important;left: 25%;" src="./img/movierecommend/movie0.png" alt="" />
          <h2>Objective</h2>
          <p>The goal of the project is to recommend movies to users based on their preferences using a content-based filtering approach.</p>
          
          <h2>Overview</h2>
          <p><strong>Problem Addressed:</strong> The project aims to enhance user experience by providing personalized movie recommendations, thereby increasing user engagement and satisfaction.</p>
          <p><strong>Solution Implemented:</strong> A content-based filtering system that suggests movies similar to those the user has previously liked, focusing on attributes such as genre, cast, and crew.</p>
          <p><strong>Outcome:</strong> Successful implementation of a recommendation system that provides relevant movie suggestions based on user preferences.</p>
          <img src="./img/movierecommend/movie1.png" alt="" />
          <h2>Tools and Software</h2>
          <ul>
              <li>Pandas</li>
              <li>Numpy</li>
          </ul>
          
          <h2>Technical Details</h2>
          <img src="./img/movierecommend/movie3.png" alt="" />
          <div class="description">
              <strong>Design Process:</strong>
              <ul>
                  <li>Initial Sketches: Identified the problem and defined the solution approach.</li>
                  <li>CAD Models: Not applicable.</li>
                  <li>Iterations and Refinements: Refined the recommendation algorithm by tuning the content-based filtering approach and improving data preprocessing.</li>
              </ul>
          </div>
          
          <div class="description">
              <strong>Analysis:</strong>
              <ul>
                  <li>Utilized cosine similarity to measure the similarity between movie attributes and user preferences.</li>
                  <li>Compared different filtering methods, including content-based and collaborative filtering, to highlight the advantages and limitations of each approach.</li>
              </ul>
          </div>
          
          <div class="description">
              <strong>Prototyping:</strong>
              <p>Implemented a prototype using Python libraries and movie datasets (credits.csv and movies.csv). Conducted tests to ensure the recommendations were accurate and relevant.</p>
          </div>
          
          <h2>Key Deliverables</h2>
          <div class="description">
              <strong>Plots and Graphs:</strong>
              <p>Not applicable for this specific project format.</p>
              
              <strong>Data and Calculations:</strong>
              <p>Calculated cosine similarity scores to find the most similar movies based on user input.</p>
              <p>Key metrics: Similarity scores, genres, and cast details.</p>
              
              <strong>Images:</strong>
              <p>Sample code and dataset visuals were provided to illustrate the recommendation function in action.</p>
              <!-- Placeholder for images -->
              <img style="width: 65% !important;left: 18%;" src="./img/movierecommend/movie6.png" alt="" />
          </div>
          
          <h2>Challenges and Solutions</h2>
          <div class="description">
              <strong>Challenges:</strong>
              <img src="./img/movierecommend/movie2.png" alt="" />
              <ul>
                  <li>Limited User Exposure: Content-based filtering restricted users' exposure to a diverse range of movies.</li>
                  <li>Data Preprocessing: Merging and cleaning the datasets (credits and movies) required meticulous preprocessing.</li>
              </ul>
              
              <strong>Solutions:</strong>
              <ul>
                  <li>Enhanced Data Preprocessing: Improved data cleaning and merging techniques to ensure accurate input for the recommendation function.</li>
                  <li>Future Plans for Collaborative Filtering: Plan to integrate collaborative filtering to overcome the limitations of content-based filtering and improve recommendation diversity.</li>
              </ul>
          </div>
          
          <h2>Outcome and Impact</h2>
          <div class="description">
          <img src="./img/movierecommend/movie5.png" alt="" />
              <strong>Results:</strong>
              <ul>
                  <li>Successfully recommended relevant movies by analyzing content-based attributes.</li>
                  <li>The system demonstrated effectiveness for small to medium-sized datasets.</li>
              </ul>
              
              <strong>Impact:</strong>
              <ul>
                  <li>On Users: Increased engagement by providing personalized recommendations.</li>
                  <li>On the Field: Demonstrated the potential for machine learning in enhancing user experience through personalized content.</li>
              </ul>
          </div>
          
          <h2>Reflection</h2>
          <div class="description">
              <strong>Learnings:</strong>
              <ul>
                  <li>Gained insights into the importance of data preprocessing and the challenges associated with different recommendation techniques.</li>
                  <li>Learned the intricacies of implementing and fine-tuning a recommendation algorithm.</li>
              </ul>
              
              <strong>Future Applications:</strong>
              <ul>
                  <li>Switch to Collaborative Filtering: Implement collaborative filtering to improve recommendation accuracy and diversity.</li>
                  <li>Expand Input Flexibility: Allow more dynamic user inputs to refine recommendations.</li>
                  <li>Incorporate Additional Data Sources: Use more comprehensive datasets to enhance recommendation quality.</li>
                  <li>Regularly Update Movie Data: Keep the movie database current to reflect new releases and trends.</li>
                  <li>Add User Personalization: Implement features that allow users to customize their recommendation criteria.</li>
                  <li>Scale for Larger Data: Optimize the system to handle larger datasets efficiently.</li>
                  <li>Evaluate Precision and Recall: Regularly assess the system's performance metrics to ensure high-quality recommendations.</li>
              </ul>
          </div>
      </div>
  
  `;

      modal.style.display = "flex";
      main.style.display = "none";
      footer.style.display = "none";
      projectdetails.style.display = "flex"
    });


  };

  if (item.classList.contains('finite-elements-engineering')) {
    item.addEventListener('click', function () {
      var title = this.querySelector('.img-description h3').innerText;
      //var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;

      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `  
      
      <style>
    .project {
        background: #fff;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .project h2 {
        margin-top: 0;
    }
    .project img {          
        border-radius: 8px;
        margin: 20px 0;
        display: block;
        width: 65%; /* Adjusted width */
        margin-left: auto;
        margin-right: auto;
    }
    .project .details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    
    .project .details strong {
        display: block;
        margin-bottom: 10px;
    }
    .project .description {
        margin-bottom: 20px;
    }
    ul {
        list-style-type: disc;
        padding-left: 20px;
    }
</style>

<div class="project">
    <img src="./img/portfolio/finite-elements.png" alt="Project Image" />
    
    <div class="details">
        
        <div>
            <strong>Objective:</strong>
            <p>To analyze fluid dynamics in various scenarios using computational simulations, focusing on methane dispersion, fluid behavior, and oscillation patterns in different mediums.</p>
        </div>
    </div>
    
    <h2>Project Description</h2>
    
    <h3>Overview</h3>
    <p>The project involved using Applied Computational Fluid Dynamics (ACFD) techniques to simulate and analyze fluid behaviors under different conditions.</p>
    
    <h3>Tools and Software</h3>
    <ul>
        <li>ANSYS Fluent</li>
        <li>MATLAB</li>
        <li>Computational Fluid Dynamics (CFD) tools</li>
    </ul>
    
    <h3>Technical Details</h3>
    
    <div class="description">
        <strong>Design Process:</strong>
        <ul>
            <li>Initial Setup: Defined computational domains and boundary conditions for all cases.</li>
            <li>Mesh Generation: Created meshes with specific resolutions for different scenarios.</li>
            <li>Simulation Setup: Configured time step sizes and maximum iterations for each simulation.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Analysis:</strong>
        <ul>
            <li>Methane Dispersion: Simulated and generated contour plots of methane volume fractions at different times.</li>
            <li>D-Index Calculation: Plotted the D-index over time to observe the effect of air inlet.</li>
            <li>Fluid Behavior Comparison: Compared the 3-D shapes and volume fractions of engine oil and mercury blobs over time.</li>
            <li>Oscillation Patterns: Analyzed the oscillation of water flow and its variation with changes in water density.</li>
        </ul>
    </div>
    
    <h3>Key Deliverables</h3>
    
    <div class="description">
        <strong>Plots and Graphs:</strong>
        <ul>
            <li>Contour Plots: Methane volume fractions, velocity magnitude, and Y-velocity of mixture at different phases.</li>
            <li>D-Index Plots: Variation over time.</li>
            <li>3-D Shape Plots: Engine oil and mercury blobs at different time intervals.</li>
            <li>Flow Rate Plots: Mass flow rate of air over oscillation period.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Data and Calculations:</strong>
        <ul>
            <li>Mesh Resolution: Various resolutions used for different tasks.</li>
            <li>Time Step Sizes: Specific step sizes set for accurate transient analysis.</li>
            <li>Iterations: Defined maximum iterations per time step for convergence.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Images:</strong>
        <p>Included contour plots, 3-D shape visualizations, and line plots depicting key results from simulations.</p>
        <img src="./img/your-image.png" alt="Project Image" />
    </div>
    
    <h3>Challenges and Solutions</h3>
    
    <div class="description">
        <strong>Challenges:</strong>
        <ul>
            <li>Mesh Convergence: Ensuring mesh resolution was sufficient without excessive computational cost.</li>
            <li>Simulation Stability: Maintaining stability during transient simulations.</li>
            <li>Damping Effects: Capturing damping effects accurately in oscillation simulations.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Solutions:</strong>
        <ul>
            <li>Mesh Refinement: Iteratively refined meshes for better detail and computation balance.</li>
            <li>Solver Adjustments: Fine-tuned solver settings for stability and convergence.</li>
            <li>Parameter Calibration: Adjusted simulation parameters to reflect physical behaviors accurately.</li>
        </ul>
    </div>
    
    <h3>Outcome and Impact</h3>
    
    <div class="description">
        <strong>Results:</strong>
        <ul>
            <li>Successful visualization of methane dispersion and D-index reduction with air inlet.</li>
            <li>Detailed comparison of engine oil and mercury fluid behaviors.</li>
            <li>Insights into oscillation patterns with varying water densities.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Impact:</strong>
        <ul>
            <li>Provided valuable data for improving safety in industrial settings.</li>
            <li>Enhanced understanding of fluid behaviors under different conditions.</li>
        </ul>
    </div>
    
    <h3>Reflection</h3>
    
    <div class="description">
        <strong>Learnings:</strong>
        <ul>
            <li>Gained proficiency in using ANSYS Fluent for complex fluid simulations.</li>
            <li>Deepened understanding of transient fluid dynamics and mesh generation.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Future Applications:</strong>
        <ul>
            <li>Applying CFD techniques to optimize industrial fluid systems.</li>
            <li>Using insights from damping and oscillation studies for designing efficient fluid transport mechanisms.</li>
        </ul>
    </div>
</div>

      `;

      modal.style.display = "flex";
      main.style.display = "none";
      footer.style.display = "none";
      projectdetails.style.display = "flex"
    });


  };


  if (item.classList.contains('cfd')) {
    item.addEventListener('click', function () {
      var title = this.querySelector('.img-description h3').innerText;
      // var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;

      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = ` 
      <style>
    .project {
        background: #fff;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .project h2 {
        margin-top: 0;
    }
    .project img {          
        border-radius: 8px;
        margin: 20px 0;
        display: block;
        width: 65%; /* Adjusted width */
        margin-left: auto;
        margin-right: auto;
    }
    .project .details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .project .details div {
        width: 30%;
    }
    .project .details strong {
        display: block;
        margin-bottom: 10px;
    }
    .project .description {
        margin-bottom: 20px;
    }
    ul {
        list-style-type: disc;
        padding-left: 20px;
    }
</style>

<div class="project">
    <img src="./img/cfd/cfd0.png" alt="Project Image" />
    <h2>Project Title: Computational Analysis of Methane Dispersion and Fluid Dynamics using ANSYS Fluent</h2>
    
    <div class="details">        
        <div>
            <strong>Objective:</strong>
            <p>To analyze fluid dynamics in various scenarios using computational simulations, focusing on methane dispersion, fluid behavior, and oscillation patterns in different mediums.</p>
        </div>
    </div>
    
    <h2>Project Description</h2>
    
    <h3>Overview</h3>
    <p>The project involved using Applied Computational Fluid Dynamics (ACFD) techniques to simulate and analyze fluid behaviors under different conditions.</p>
    
    <h3>Tools and Software</h3>
    <ul>
        <li>ANSYS Fluent</li>
        <li>MATLAB</li>
        <li>Computational Fluid Dynamics (CFD) tools</li>
    </ul>
    
    <h3>Technical Details</h3>
    
    <div class="description">
        <strong>Design Process:</strong>
        <ul>
            <li>Initial Setup: Defined computational domains and boundary conditions for all cases.</li>
            <li>Mesh Generation: Created meshes with specific resolutions for different scenarios.</li>
            <li>Simulation Setup: Configured time step sizes and maximum iterations for each simulation.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Analysis:</strong>
        <ul>
            <li>Methane Dispersion: Simulated and generated contour plots of methane volume fractions at different times.</li>
            <li>D-Index Calculation: Plotted the D-index over time to observe the effect of air inlet.</li>
            <li>Fluid Behavior Comparison: Compared the 3-D shapes and volume fractions of engine oil and mercury blobs over time.</li>
            <li>Oscillation Patterns: Analyzed the oscillation of water flow and its variation with changes in water density.</li>
        </ul>
    </div>
    
    <h3>Key Deliverables</h3>
    
    <div class="description">
        <strong>Plots and Graphs:</strong>
        <ul>
            <li>Contour Plots: Methane volume fractions, velocity magnitude, and Y-velocity of mixture at different phases.</li>
            <li>D-Index Plots: Variation over time.</li>
            <li>3-D Shape Plots: Engine oil and mercury blobs at different time intervals.</li>
            <li>Flow Rate Plots: Mass flow rate of air over oscillation period.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Data and Calculations:</strong>
        <ul>
            <li>Mesh Resolution: Various resolutions used for different tasks.</li>
            <li>Time Step Sizes: Specific step sizes set for accurate transient analysis.</li>
            <li>Iterations: Defined maximum iterations per time step for convergence.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Images:</strong>
        <p>Included contour plots, 3-D shape visualizations, and line plots depicting key results from simulations.</p>
        <img src="./img/cfd/cfd1.png" alt="Project Image" />
    </div>
    
    <h3>Challenges and Solutions</h3>
    
    <div class="description">
        <strong>Challenges:</strong>
        <ul>
            <li>Mesh Convergence: Ensuring mesh resolution was sufficient without excessive computational cost.</li>
            <li>Simulation Stability: Maintaining stability during transient simulations.</li>
            <li>Damping Effects: Capturing damping effects accurately in oscillation simulations.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Solutions:</strong>
        <ul>
            <li>Mesh Refinement: Iteratively refined meshes for better detail and computation balance.</li>
            <li>Solver Adjustments: Fine-tuned solver settings for stability and convergence.</li>
            <li>Parameter Calibration: Adjusted simulation parameters to reflect physical behaviors accurately.</li>
        </ul>
    </div>
    
    <h3>Outcome and Impact</h3>
    
    <div class="description">
        <strong>Results:</strong>
        <ul>
            <li>Successful visualization of methane dispersion and D-index reduction with air inlet.</li>
            <li>Detailed comparison of engine oil and mercury fluid behaviors.</li>
            <li>Insights into oscillation patterns with varying water densities.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Impact:</strong>
        <ul>
            <li>Provided valuable data for improving safety in industrial settings.</li>
            <li>Enhanced understanding of fluid behaviors under different conditions.</li>
        </ul>
    </div>
    
    <h3>Reflection</h3>
    
    <div class="description">
        <strong>Learnings:</strong>
        <ul>
            <li>Gained proficiency in using ANSYS Fluent for complex fluid simulations.</li>
            <li>Deepened understanding of transient fluid dynamics and mesh generation.</li>
        </ul>
    </div>
    
    <div class="description">
        <strong>Future Applications:</strong>
        <ul>
            <li>Applying CFD techniques to optimize industrial fluid systems.</li>
            <li>Using insights from damping and oscillation studies for designing efficient fluid transport mechanisms.</li>
        </ul>
    </div>
</div>      
      `;

      modal.style.display = "flex";
      main.style.display = "none";
      footer.style.display = "none";
      projectdetails.style.display = "flex"

    });
  };

  if (item.classList.contains('DRL')) {
    item.addEventListener('click', function () {
      var title = this.querySelector('.img-description h3').innerText;
      // var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;

                  document.getElementById('modalTitle').innerText = 'Decision-Making Strategy on Highway for Autonomous Vehicles Using Reinforcement Learning';
                  document.getElementById('modalDescription').innerHTML = ` 
                  <style>
                  
                  .project {
                      background: #fff;
                      padding: 20px;
                      margin: 20px;
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  }
                  .project h2 {
                      margin-top: 0;
                  }
                  .project img {
                      border-radius: 8px;
                      margin: 20px 0;
                      display: block;
                      position: relative;
                      height: auto;
                      width: 300px;
                      left: 35%;
                  }
                  .image-container {
                    display: flex;
                    justify-content: center;
                    gap: 20px; /* Adjust the gap between images as needed */
                  }
                .image-container img {
                  border-radius: 8px;
                  margin: 20px 0;
                  height: auto;
                  width: 500px;
                  left:0
              }
                  .project .details {
                      display: flex;
                      justify-content: space-between;
                  }
                  .project .details div {
                      width: 30%;
                  }
                  .project .details strong {
                      display: block;
                      margin-bottom: 10px;
                  }
                  .project .description {
                      margin: 20px 0;
                  }
                  ul {
                      list-style-type: disc;
                      padding-left: 20px;
                  }
              </style>
          
              <div class="project">
                  <img style="width:55% !important;left:25%" src="./img/DRL/drl.png" alt="Project Image" />
                  <h2>Objective</h2>
                  <p>The goal of the project is to develop and evaluate decision-making strategies for autonomous vehicles during highway driving scenarios using deep reinforcement learning techniques.</p>
                  
                  <img style="width:55% !important;left:25%" src="./img/DRL/drl1.png" alt="Project Image" />
                  <h2>Overview</h2>
                  <p><strong>Problem Addressed:</strong> The project aims to improve the efficiency and safety of overtaking maneuvers performed by autonomous vehicles on highways.</p>
                  <p><strong>Solution Implemented:</strong> Implemented and compared Deep Q-Network (DQN), Double-Deep Q-Network (DDQN), and Dueling-Deep Q-Network (Dueling DQN) to optimize the decision-making process.</p>
                  <p><strong>Outcome:</strong> The study found that Dueling DQN outperformed other methods in terms of reward accumulation and stability, suggesting better performance in making safe and efficient driving decisions.</p>
                  
                  <h2>Tools and Software</h2>
                  <ul>
                      <li>Python</li>
                      <li>Conda</li>
                      <li>TensorFlow</li>
                      <li>Gym</li>
                      <li>PyTorch</li>
                      <li>Matplotlib</li>
                      <li>Pandas</li>
                      <li>SciPy</li>
                      <li>Numba</li>
                      <li>Seaborn</li>
                      <li>Torch</li>
                      <li>TensorboardX</li>
                      <li>pytest-runner</li>
                      <li>rl-agent</li>
                  </ul>
                  
                  <h2>Technical Details</h2>
                  <div class="description">
                      <strong>Design Process:</strong>
                      <img style="width:55% !important;left:25%" src="./img/DRL/drl3.png" alt="Project Image" />
                      <ul>
                          <li>Initial Sketches: Defined the highway driving environment and the control structure for the ego vehicle.</li>
                          <li>CAD Models: Not applicable for this project.</li>
                          <li>Iterations and Refinements: Iteratively adjusted model parameters and training setups to enhance performance.</li>
                      </ul>
                  </div>
                  
                  <div class="description">
                      <strong>Analysis:</strong>
                      <img style="width:55% !important;left:25%" src="./img/DRL/drl4.png" alt="Project Image" />
                      <ul>
                          <li>Simulated and generated contour plots of methane volume fractions at different times.</li>
                          <li>Plotted the D-index over time to observe the effect of air inlet.</li>
                          <li>Compared the 3-D shapes and volume fractions of engine oil and mercury blobs over time.</li>
                          <li>Analyzed the oscillation of water flow and its variation with changes in water density.</li>
                      </ul>
                  </div>
                  
                  <div class="description">
                      <strong>Prototyping:</strong>
                      <p>Prototyping in this context involved running multiple simulation iterations to refine the computational models and ensure accuracy.</p>
                  </div>
                  
                  <h2>Key Deliverables</h2>
                  <div class="description">
                      <strong>Plots and Graphs:</strong>
                      <div class="image-container">
                          <img src="./img/DRL/drl6a.png" alt="CPV Image 2" />
                          <img src="./img/DRL/drl6b.png" alt="CPV Image 3" />
                      </div>
                      <ul>
                          <li>Total Reward vs. Episode</li>
                          <li>Total Length vs. Episode</li>
                          <li>Driving condition scenarios showing successful and unsuccessful maneuvers.</li>
                      </ul>
                      
                      <strong>Data and Calculations:</strong>
                      <ul>
                          <li>Training Duration: 18 hours for a 30-second drive.</li>
                          <li>Model Performance Metrics:
                              <ul>
                                  <li>DQN: Total Reward: 61.7</li>
                                  <li>DDQN: Total Reward: 68.6</li>
                                  <li>Dueling DQN: Total Reward: 73.5</li>
                              </ul>
                          </li>
                      </ul>
                      
                      <strong>Images:</strong>
                      <p>Simulation environments, training reward plots, and driving condition snapshots from simulations.</p>
                  </div>
                  
                  <h2>Challenges and Solutions</h2>
                  <div class="description">
                      <strong>Challenges:</strong>
                      <ul>
                          <li>Technical Challenges:
                              <ul>
                                  <li>Handling continuous action space and large state space.</li>
                                  <li>Debugging issues related to package version mismatches and tensor multiplication errors.</li>
                              </ul>
                          </li>
                      </ul>
                      
                      <strong>Solutions:</strong>

                      <ul>
                          <li>Utilized Dueling DQN to address overestimation of rewards.</li>
                          <li>Fixed bugs in the open-source package and coordinated with the publisher for corrections.</li>
                      </ul>
                  </div>
                  
                  <h2>Outcome and Impact</h2>
                  <div class="description">
                      <strong>Results:</strong>
                      <img src="./img/DRL/drl5.png" alt="CPV Image 2" />
                      <ul>
                          <li>Dueling DQN showed better training stability, learning speed, and overall performance in terms of total reward and safe maneuvers.</li>
                          <li>Reward Increase: 19.1% higher total reward for Dueling DQN compared to DDQN.</li>
                          <li>Efficiency Improvement: Reduced training instability and improved driving decision quality.</li>
                      </ul>
                      
                      <strong>Impact:</strong>
                      <ul>
                          <li>Academic Impact: Provided a detailed comparison of reinforcement learning algorithms in autonomous driving contexts.</li>
                          <li>Practical Impact: The findings can inform the development of more reliable and efficient decision-making systems for autonomous vehicles.</li>
                      </ul>
                  </div>
                  
                  <h2>Reflection</h2>
                  <div class="description">
                      <strong>Learnings:</strong>
                      <ul>
                          <li>Enhanced understanding of reinforcement learning techniques and their applications in autonomous driving.</li>
                          <li>Gained experience in debugging and optimizing complex machine learning models.</li>
                          <li>Learned the importance of evaluating algorithm effectiveness through comprehensive testing and real-time simulations.</li>
                      </ul>
                      
                      <strong>Future Applications:</strong>
                      <ul>
                          <li>Enhanced Modeling Techniques: Apply advanced reinforcement learning algorithms and incorporate additional real-world driving scenarios.</li>
                          <li>Broader Material Analysis: Extend the decision-making strategies to more complex driving environments, including urban settings.</li>
                          <li>Real-World Applications: Implement findings to improve the safety and efficiency of commercial autonomous vehicle systems.</li>
                      </ul>
                  </div>
                  
                  <h2>Quantified Effects</h2>
                  <div class="description">
                      <strong>Training Efficiency:</strong>
                      <ul>
                          <li>Metric: Training Time Reduction</li>
                          <li>Baseline: Initial training time was 25 hours for similar setups.</li>
                          <li>Post-Optimization: Reduced training time to 18 hours, improving efficiency by 28%.</li>
                      </ul>
                      
                      <strong>Model Performance:</strong>
                      <ul>
                          <li>Metric: Total Reward</li>
                          <li>Baseline: DQN achieved a total reward of 61.7.</li>
                          <li>Post-Optimization: Dueling DQN achieved a total reward of 73.5, representing a 19.1% improvement.</li>
                      </ul>
                      
                      <strong>Safety and Reliability:</strong>
                      <ul>
                          <li>Metric: Collision Rate Reduction</li>
                          <li>Baseline: Initial collision rate during simulation was 15%.</li>
                          <li>Post-Optimization: Reduced collision rate to 5%, enhancing safety by 66.7%.</li>
                      </ul>
                  </div>
              </div>
      `;

      modal.style.display = "flex";
      main.style.display = "none";
      footer.style.display = "none";
      projectdetails.style.display = "flex"

    });


  };

});


document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.getElementById('read-more-btn');
  const closeBtn = document.getElementById('close-btn');
  const readMoreContent = document.getElementById('read-more-content');
  const backbtn = document.getElementById("back-btn");
  const modal = document.getElementById("portfolioModal");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  const projectdetails = document.getElementById("project-details")

  readMoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    readMoreContent.style.display = 'block';
    window.scrollTo({
      top: readMoreContent.offsetTop,
      behavior: 'smooth'
    });
  });

  backbtn.addEventListener('click', function (event) {
    event.preventDefault();
    main.style.display = "block";
    projectdetails.style.display = "none";
    modal.style.display = "none";
    footer.style.display = "block";

  });

  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    readMoreContent.style.display = 'none';
    window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const hiremeText = document.getElementById('hireme-text');
  const contactText = document.getElementById('contact-text');
  const contactAddress = document.getElementById('contact-address');
  const contactEmail = document.getElementById('contact-email');
  const contactPhone = document.getElementById('contact-phone');
  const readMoreBtn = document.getElementById('read-more-btn');
  const readLessBtn = document.getElementById('read-less-btn');
  const moreContent = document.getElementById('more-content');
  const formResponse = document.getElementById('form-response');
  const contactForm = document.getElementById('contact-form');

  // Harshal Tingre's information from the resume
  const hiremeDescription = "I am a skilled mechanical engineer with expertise in designing, analyzing, and optimizing mechanical systems. With a strong background in CAD design and project management, I thrive in collaborative environments and excel at solving complex engineering challenges. Let's connect and explore how we can achieve your project goals together.";
  const contactDescription = "Feel free to reach out to me via email or phone for any inquiries or project discussions.";
  const address = "Arizona, USA";
  const email = "htingre@asu.edu";
  const phone = "+1-602 738 3155";

  // Updating the HTML content with the resume information
  hiremeText.textContent = hiremeDescription;
  contactText.textContent = contactDescription;
  contactAddress.textContent = address;
  contactEmail.textContent = email;
  contactPhone.textContent = phone;

  // Show more content on clicking 'Read more'
  readMoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    moreContent.style.display = 'block';
    readMoreBtn.style.display = 'none';
  });

  // Hide more content on clicking 'Read less'
  readLessBtn.addEventListener('click', function (event) {
    event.preventDefault();
    moreContent.style.display = 'none';
    readMoreBtn.style.display = 'block';
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Show confirmation message
    formResponse.style.display = 'block';

    // Hide the confirmation message after 5 seconds
    setTimeout(function () {
      formResponse.style.display = 'none';
    }, 5000);

    // Reset form fields
    contactForm.reset();
  });
});


// JavaScript function to handle CV download
function downloadCV() {
  const cvFilePath = 'img/cv.pdf'; // Path to the CV file
  const link = document.createElement('a');
  link.href = cvFilePath;
  link.download = 'cv.pdf'; // The name of the file to be downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach the downloadCV function to the button click event
document.getElementById('downloadCVBtn').addEventListener('click', downloadCV);






