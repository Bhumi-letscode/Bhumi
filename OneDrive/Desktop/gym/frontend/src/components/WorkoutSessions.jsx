import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP SUSTAINABILITY COURSES</h1>
        <p>
        Highlight of top eco-conscious fitness sessions that integrate technology and sustainability.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED WORKSHOPS</h1>
        <p>
        Details about featured EcoEdge bootcamps focusing on sustainable living and personal development.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Eco-Friendly Home Hacks</h4>
            <p>
            Learn practical ways to make your home more energy-efficient, reduce waste, and create a greener living space with simple, cost-effective solutions.
            </p>
          </div>
          <div>
            <h4>Zero-Waste Living Made Easy</h4>
            <p>
            Master the art of reducing, reusing, and recycling with our hands-on zero-waste workshops. Transform everyday habits to live more sustainably.
            </p>
          </div>
          <div>
            <h4>Power Your Life Sustainably</h4>
            <p>
            Explore how renewable energy sources like solar, wind, and hydro can be incorporated into your daily life to reduce your carbon footprint.
            </p>
          </div>
          <div>
            <h4>Grow Your Own Greens</h4>
            <p>
            Discover the joy of organic gardening! Learn how to grow fresh vegetables, herbs, and fruits at home, even in small spaces, with eco-friendly techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions