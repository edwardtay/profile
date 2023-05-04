import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <Image src="/edwardtay.png" width={200} height={200} alt="Profile picture" />
        <br />
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/edwardtaychuern"><Image src="./public/linkedin.png" width={50} height={50} alt="linkedin logo" /></a>
          <a href="https://github.com/edwardtay"><Image src="/public/github.png" width={50} height={50} alt="github logo" /></a>
          <a href="https://www.twitter.com/iamedwardtay"><Image src="././public/twitter.png" width={50} height={50} alt="twitter logo" /></a>
          <a href="https://soundcloud.com/edwardtay"><Image src="/profile-page/soundcloud.png" width={50} height={50} alt="soundcloud logo" /></a>
          <a href="https://quora.com/profile/Edward-Tay"><Image src="/profile-page/quora.png" width={50} height={50} alt="quora logo" /></a>
          <br />
          <a href="https://oncyber.io/edwardtay"><Image src="/profile-page/oncyber.png" width={50} height={50} alt="oncyber logo" /></a>
          <a href="mailto:contact@edwardtay.com"><Image src="https://github.com/edwardtay/profile-page/blob/f9046cefa60b9f42c1821a634e3d6f6209d3d374/public/email.png" width={50} height={50} alt="email logo" /></a>
          <a href="https://medium.com/@edwardtay"><Image src="/profile-page/medium.png" width={50} height={50} alt="medium logo" /></a>
          <a href="https://www.lensfrens.xyz/edwardtay.lens"><Image src="/profile-page/lens.png" width={50} height={50} alt="lens logo" /></a>
          <a href="https://fcast.me/edwardtay"><Image src="/profile-page/farcaster.png" width={50} height={50} alt="farcaster logo" /></a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
