import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <Image src="/profile-page/edwardtay.png" width={188} height={188} alt="Profile picture" />
        <br />
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/edwardtaychuern"><Image src="/profile-page/linkedin.png" width={44} height={44} alt="linkedin logo" /></a>
          <a href="https://github.com/edwardtay"><Image src="/profile-page/github.png" width={44} height={44} alt="github logo" /></a>
          <a href="https://www.twitter.com/iamedwardtay"><Image src="/profile-page/twitter.png" width={44} height={44} alt="twitter logo" /></a>
          <a href="https://soundcloud.com/edwardtay"><Image src="/profile-page/soundcloud.png" width={44} height={44} alt="soundcloud logo" /></a>
          <a href="https://quora.com/profile/Edward-Tay"><Image src="/profile-page/quora.png" width={44} height={44} alt="quora logo" /></a>
          <br />
          <a href="https://oncyber.io/edwardtay"><Image src="/profile-page/oncyber.png" width={44} height={44} alt="oncyber logo" /></a>
          <a href="mailto:contact@edwardtay.com"><Image src="/profile-page/email.png" width={44} height={44} alt="email logo" /></a>
          <a href="https://medium.com/@edwardtay"><Image src="/profile-page/medium.png" width={44} height={44} alt="medium logo" /></a>
          <a href="https://www.lensfrens.xyz/edwardtay.lens"><Image src="/profile-page/lens.png" width={44} height={44} alt="lens logo" /></a>
          <a href="https://fcast.me/edwardtay"><Image src="/profile-page/farcaster.png" width={44} height={44} alt="farcaster logo" /></a>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
