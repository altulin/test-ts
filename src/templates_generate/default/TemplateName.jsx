import clsx from "clsx";
import style from "./TemplateName.module.scss";

const TemplateName = () => {
  return (
    <section className={clsx(style.templateName)}>
      <div className={clsx(style.templateName__inner)}>
        TemplateName Component
      </div>
    </section>
  );
};

export default TemplateName;
