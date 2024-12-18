import { Heading } from '@/context/commonImports';
import { PageProps, withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import { GetStaticPaths, GetStaticProps } from 'next';

const Page: React.FC<PageProps> = (pageProps) => {
  const translationPage = pageProps.translations.userAgreement.userAgreementPage;
  const paragraph = translationPage.description;
  const whatWeCollect = translationPage.whatWeCollect;
  const howWeuseData = translationPage.howWeuseData;
  const consentToUse = translationPage.consentToUse;
  const howToDisable = translationPage.howToDisable;
  const additionalInformation = translationPage.additionalInformation;
  return (
    <>
      <div className="w-full h-[115px] lg:h-[170px] bg-[url('/assets/bg-user-agreement.webp')] bg-cover bg-no-repeat"></div>
      <section className="max-w-[1300px] w-full mx-auto my-0 px-4 pt-10 pb-10">
        <Heading level="h1" text={translationPage.title} />

        <article className="mt-10">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
            <strong>{paragraph.introductionStrong}</strong> {paragraph.includes} <strong>{paragraph.toolsStrong}</strong>{' '}
            {paragraph.includesContinuation} {paragraph.useInformation} <strong>{paragraph.useInformationStrong}</strong>
          </p>
        </article>

        <article className="mt-10">
          <Heading level="h2" text={whatWeCollect.title} />
          <ul role="list" className="list-disc pl-5 space-y-3">
            {whatWeCollect.descriptionList.map((item, index) => (
              <li className="mt-3" key={index}>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
                  <strong>{item.title}</strong> {item.description}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="mt-10">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
            <strong>{howWeuseData.title}</strong> {howWeuseData.whatIsTheDataFor} <strong>{howWeuseData.whatIsTheDataForStrong}</strong>{' '}
            {howWeuseData.dataTransfer} <strong>{howWeuseData.toolsStrong}</strong>
          </p>
        </article>

        <article className="mt-10">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
            <strong>{consentToUse.title}</strong> {consentToUse.description}
          </p>
        </article>

        <article className="mt-10">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
            <strong>{howToDisable.title}</strong> {howToDisable.description} <strong>{howToDisable.toolsStrong}</strong>{' '}
            {howToDisable.descriptionContinuation} <span className="text-[#2964aa]">{howToDisable.toolsSelected}</span> {howToDisable.descriptionEnd}
          </p>
        </article>

        <article className="mt-10">
          <Heading level="h2" text={additionalInformation.title} />
          <ul role="list" className="list-disc pl-5 space-y-3">
            <li className="mt-3">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
                {' '}
                {additionalInformation.legalRequirements} {additionalInformation.gdpr} {additionalInformation.legalRequirementsContinuation}{' '}
                <strong>{additionalInformation.legalRequirementsStrong}</strong>
              </p>
            </li>
            <li className="mt-3">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">{additionalInformation.additionalQuestions}</p>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;
