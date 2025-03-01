import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export default function Plans() {
  return (
    <div className="plans-containers" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: "2rem"}}>
        <span className="stroke-text" >Ready to start</span>
        <span>your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, j) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={j}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div>
                    <span>See more benifits </span>
                </div>
                <button className="btn">Join Now</button>
            </div>
        ))}
      </div>
    </div>
  )
}
