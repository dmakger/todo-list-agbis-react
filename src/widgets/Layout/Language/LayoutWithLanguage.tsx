import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cl from "./_LayoutWithLanguage.module.scss";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonSize } from "@/shared/ui/Button/data/button.data";

export const LayoutWithLanguage: FC = () => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div className={cl.layout}>
            <Outlet />
            <Button variant={ButtonVariant.Border}
                    size={ButtonSize.Small}
                    title={t("language")} 
                    onClick={changeLang} 
                    className={cl.languageButton} />
        </div>
    );
};
