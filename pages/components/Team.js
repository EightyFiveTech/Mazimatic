import React from 'react'

const Team = () => {
  return (
    <section id="Team">
        <img src="/assets/images/team-bg.svg" className="team-bg" />
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Our Team</h2>
            </div>
        </div>
        
        <div className="row first-row">
            <div className="col-md-3 member">
            <img src="/assets/images/gold-member.png" />
            <p>CEO / Co-Founder</p>
            </div>
            <div className="col-md-3 member bottom">
            <img src="/assets/images/gold-member.png" />
            <p>CTO / CGO</p>
            </div>
            <div className="col-md-3 member bottom">
            <img src="/assets/images/gold-member.png" />
            <p>CFO / Co-Founder</p>
            </div>
            <div className="col-md-3 member">
            <img src="/assets/images/gold-member.png" />
            <p>CLO / Co-Founder</p>
            </div>
        </div>

        <div className="row second-row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="row">
            <div className="col-md-4 member">
            <img src="/assets/images/red-member.png" />
            <p>CMO</p>
            </div>
            <div className="col-md-4 member bottom">
            <img src="/assets/images/red-member.png" />
            <p>Co-Founder</p>
            </div>
            <div className="col-md-4 member">
            <img src="/assets/images/red-member.png" />
            <p>Co-Founder</p>
            </div> 
            </div>
            </div>
            <div className="col-md-2"></div>
        </div>


        <div className="row third-row">
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Chief Advisors </p>
                    </div>
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Chief Advisors </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Chief Advisors </p>
                    </div>
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Chief Advisors </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Blockchain Developer</p>
                    </div>
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Unity Developer </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>Frontend Developer </p>
                    </div>
                    <div className="col-md-6 sub-member">
                    <img src="/assets/images/white-member.png"/>
                    <p>VFX Designer </p>
                    </div>
                </div>
            </div>
        </div>
        


    </section>
  )
}

export default Team