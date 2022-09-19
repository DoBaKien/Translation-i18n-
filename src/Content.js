import { useTranslation } from "react-i18next";
function Content() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("hello")}</h1>
      <h1>{t("how are you")}</h1>
    </>
  );
}

export default Content;
