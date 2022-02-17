import { AiOutlineForm } from "react-icons/ai";
import { RiContactsLine, RiDatabaseLine, RiGitBranchLine } from "react-icons/ri";
import { AsideLink } from "./AsideLink";
import { AsideSection } from "./AsideSection";

export function AsideNav() {
    return (
        <>
        <AsideSection title="GERAL">
            <AsideLink linkUrl="/dashboard" icon={RiDatabaseLine} LinkName="Dashboard">
            </AsideLink>
            <AsideLink linkUrl="/users" icon={RiContactsLine} LinkName="Usuários">
            </AsideLink>
        </AsideSection>
        <AsideSection title="AUTOMAÇÃO">
            <AsideLink linkUrl='/#' icon={AiOutlineForm} LinkName="Formulário">
            </AsideLink>
            <AsideLink linkUrl='/#' icon={RiGitBranchLine} LinkName="Automação">
            </AsideLink>
        </AsideSection>
        </>
    )
}