import styles from './video.styles.module.scss';

const EthAccraVideo2023 = () => {
  return (
    <>
      <div id="ethAccra-hackaton-video" className='relative overflow-hidden'>
        <div className="bg-[#B17F3480] absolute left-0 right-0 top-0 bottom-0 flex items-center justify-left h-full">
          <div className='max-w-[27rem] px-4 md:px-[8.5rem]'>
            <h1 className={styles.headingText}>2023 Highlights</h1>
          </div>
        </div>

        <div>
          <video className="w-full max-h-full h-auto lg:h-auto" autoPlay muted loop>
            <source src="/assets/video/EthAccra_Hackathon.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default EthAccraVideo2023;
