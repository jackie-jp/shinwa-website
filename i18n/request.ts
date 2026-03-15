import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  const supportedLocales = ['en', 'ja', 'zh'];
  const currentLocale = locale && supportedLocales.includes(locale) ? locale : 'ja';
  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
    locale: currentLocale
  };
});
