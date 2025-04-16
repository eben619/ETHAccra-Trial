const EthAccraVideo = () => {
  return (
    <>
      <div id="ethAccra-hackaton-video">
        <video className="w-full max-h-full" autoPlay muted loop>
          <source src="/assets/video/EthAccra-2024-hackathon.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="gallery"></div>
    </>
  );
};

export default EthAccraVideo;
