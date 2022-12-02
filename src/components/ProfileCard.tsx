import './ProfileCard.scss'
import profileImg from '../assets/image-victor.jpg'
import cardPattern from '../assets/bg-pattern-card.svg'

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <img src={cardPattern} alt="Card Pattern" />
      <div>
        <img src={profileImg} alt="Image of Vector" />
        <article>
          <h3>Victor Crest <span className='age-text'>26</span></h3>
          <p>London</p>
        </article>
        <div>
          <p>80K<span>Followers</span></p>
          <p>803K<span>Likes</span></p>
          <p>1.4K<span>Photos</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default ProfileCard;