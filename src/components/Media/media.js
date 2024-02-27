import common from "../../common.module.css";
import media from "./media.module.css";

const Media = () => {
  return (
    <section className={media.media}>
      <div className={common.container_1300px}>
        <div className={media.media_content}></div>
      </div>
    </section>
  );
};

export default Media;
