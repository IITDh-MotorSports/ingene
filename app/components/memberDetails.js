"use client";
import { teamMembers } from "../assets/teamMembers";
import TeamCard from "./teamCard";

// importing aos

export default function MemberDetails() {
  // const [categories, setCategories] = useState([]);
  const categories = new Set();
  teamMembers.forEach((member) => {
    categories.add(member.team);
  });
  const categoriesArray = Array.from(categories);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="h-screen w-screen p-6">
      <div className="bg-transparent h-screen">
        <div>
          {categoriesArray?.map((category) => {
            return (
              <div>
                <p style={{ fontSize: "2rem", color: "white" }}>
                  {capitalizeFirstLetter(category)}
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-screen mx-auto">
                  {teamMembers.map((member) => {
                    return (
                      member.team === category && (
                        <TeamCard
                          name={member.title}
                          description={member.paragraph}
                          link={member.image}
                          alt={member.title}
                        />
                      )
                    );
                  })}
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
            );
          })}
          {/* <div>
            <TeamCard
              name="Yadav Vansh Suresh"
              description="As the secretary and team leader of InGene Motorsports, I handle the serious stuff with a touch of humor, ensuring our team stays on track and laughing all the way to the finish line."
              link="/TeamImages/IMG_20220307_183329__01__01 - Yadav Vansh Suresh.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Varun Shantanu Limaye"
              description="Core team member, currently working in the brakes and suspension department."
              link="/TeamImages/IMG_20221126_220957~2 - Varun Shantanu Limaye.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Harsh Vardhan Chowdhary"
              description="Core Team Member, working primarily on Powertrain and Steering Systems"
              link="/TeamImages/IMG_20230520_124748 - Harsh Vardhan Chowdhary.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Ayush Singhi"
              description="EE '25 "
              link="/TeamImages/Singhi.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Arindam Thander"
              description="what do u do in this team?"
              link="/TeamImages/IMG_20230321_192316 - Arindam Thander.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Hari Prasad P"
              description="Final year Undergraduate enthusiastic about Aerodynamics, Turbomachinery and Engines in general still on my journey to figure out my area of interest."
              link="/TeamImages/_MG_0431-min - Hari Prasad P.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Gudapareddy Naganandini"
              description="Sarcasm Connoisseur "
              link="/TeamImages/02584B0C-C50E-4205-A4FD-F6D13D5D1215 - Gudapareddy Naganandini.jpeg"
            />
          </div>
          <div>
            <TeamCard
              name="Soham Khapre"
              description="I am in chassis team. I am interested in working alongside powertrain department for effective manufacturing and functioning of the automobile."
              link="/TeamImages/SohamKhapre.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Simoni Tripathi"
              description="An experienced editor being an amateur photographer:))"
              link="/TeamImages/20230516_202329 - Simoni Tripathi.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Surzith Raj Pandi"
              description="CSE undergrad with passion for cars. I am a curious and adaptable person who loves to learn and explore new things. "
              link="/TeamImages/srp.jpeg"
            />
          </div>
          <div>
            <TeamCard
              name="Upamaka S V B S B Abhinay"
              description="what do u do in this team?"
              link="/TeamImages/IMG_20221211_105347 - Upamaka S V B S B Abhinay.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Ankit Kumar"
              description="what do u do in this team?"
              link="/TeamImages/IMG_20230112_141607 - Ankit Kumar.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Kute Yash Satish"
              description="Airborne Hooper, History Buff, KK's Serenade.
I am your quintessential sugar-coated Marathi dude"
              link="/TeamImages/IMG_20230430_141145 - Kute Yash Satish.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Lokesh B Jogi"
              description="what do u do in this team?"
              link="/TeamImages/IMG_20230513_171551 - Lokesh B Jogi.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Manindra Singh Rathore"
              description="what do u do in this team?"
              link="/TeamImages/IMG_20230517_163633 - Manindra Singh Rathore.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Tejas Ajit Mhaiskar"
              description="As a member of the powertrains department, I am always seeking to improve our performance and push the limits of what's possible. "
              link="/TeamImages/ingene photo - Tejas Ajit Mhaiskar.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Devansh Jandrasuaplli"
              description="what do u do in this team?"
              link="/TeamImages/WhatsApp Image 2023-06-25 at 21.57.35 Devansh.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Rudra Rudra"
              description="a.k.a. Wile E Coyote. Gonna catch the Road Runner one day. Certified Racist."
              link="/TeamImages/Rudra - Rudra Rudra.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Ayush Mallick"
              description="what do u do in this team?"
              link="/TeamImages/SAVE_20230515_062900 - Ayush Mallick.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Anurag Goel"
              description="Btech CSE IIT Dharwad"
              link="/TeamImages/Screenshot_20230516-093249_Gallery - Anurag Goel.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Ratish Sinha"
              description="what do u do in this team?"
              link="/TeamImages/WhatsApp Image 2023-05-17 at 01.33.35 - Ratish Sinha.jpg"
            />
          </div>
          <div>
            <TeamCard
              name="Saksham Chhimwal"
              description="Made what you are viewing"
              link="/TeamImages/Saksham.png"
            />
          </div>
          <div>
            <TeamCard
              name="Sarth Rajain"
              description="Made what you are viewing"
              link="/TeamImages/Sarth.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
