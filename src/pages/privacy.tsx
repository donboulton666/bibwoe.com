/** @jsx jsx */ /** @jsxFrag React.Fragment */
import { jsx, Box } from 'theme-ui'
import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import { RiArrowRightSLine, RiArrowLeftSLine, RiCheckboxCircleLine } from 'react-icons/ri'
import Layout from '../components/Layout'
import OGImage from '../../static/assets/song.jpg'

const url = typeof window !== 'undefined' ? window.location.href : ''
const ogimage = {
  src: OGImage,
  width: 1400,
  height: 531,
}

const Privacy = () => (
  <Layout className="not-found-page">
    <div className="left-beams">
      <div className="wrapper">
        <Box
          style={{
            textAlign: 'center',
          }}
        >
          <RiCheckboxCircleLine
            style={{
              fontSize: '128px',
              color: 'gray',
            }}
          />
          <h1>Privacy</h1>
          <p>
            <h2>User data encrypted</h2>

            <p>⚓ The privacy of my visitors is extremely important.</p>

            <p>
              This Privacy Policy outlines the types of personal information that is received and collected and how it
              is used.
            </p>

            <p>
              First and foremost, I will never share your email address or any other personal information to anyone
              without your direct consent.
            </p>
          </p>
        </Box>
        <h2>Log Files</h2>

        <p>
          🏴󠁡󠁦󠁬󠁯󠁧󠁿 Like many other websites, this site uses log files to help learn about when, from where, and how
          often traffic flows to this site. The information in these log files include:
        </p>
        <div>
          <ul>
            <li>- Internet Protocol addresses (IP)</li>
            <li>- Types of browser</li>
            <li>- Internet Service Provider (ISP)</li>
            <li>- Date and time stamp</li>
            <li>- Referring and exit pages</li>
            <li>- Number of clicks</li>
          </ul>
        </div>

        <p>All of this information is not linked to anything that is personally identifiable.</p>

        <h2>Cookies And Beacons</h2>

        <p>
          🍪 When you visit this site "convenience" cookies are stored on your computer when you submit a comment to
          help you log in faster to, 🔗 \*{' '}
          <Link to="https://twitter.com/donboulton" alt="Twitter">
            Twitter
          </Link>{' '}
          the next time you tweet.
        </p>
        <div>
          <h2>Cookies And Beacons</h2>
          <p>
            🍪 When you visit this site "convenience" cookies are stored on your computer when you submit a comment to
            help you log in faster to 🔗 \* <Link yo="https://twitter.com/donboulton">Twitter</Link> the next time you
            do a tweet.
          </p>
          <p>
            Third-party advertisers may also place and read cookies on your browser and/or use web beacons to collect
            information. This site has no access or control over these cookies. You should review the respective privacy
            policies on any and all third-party ad servers for more information regarding their practices and how to
            opt-out.
          </p>
          <p>
            If you wish to disable cookies, you may do so through your web browser options. Instructions for doing so
            can be found on the specific web browsers' websites.
          </p>
          <h3>Cookies in EU Law</h3>
          ⚖️ Internet Law
          <p>
            🔗 \*{' '}
            <Link to="https://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too">
              Is the EU's cookie law confusing you too?
            </Link>
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://www.privacypolicies.com/blog/eu-cookie-law/">EU cookie law (e-Privacy Directive)</Link>
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/">
              Cookies – Doing nothing isn't the right answer
            </Link>
          </p>
          <h3>Disabling Cookies</h3>
          <p>
            ❌ If you would like to restrict the use of cookies you can control this in your Internet browser. Links to
            advice on how to do this for the most popular Internet browsers are provided below for convenience and will
            be available for the Internet browser of your choice either online or via the software help (normally
            available via key F1).
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://www.cookiesandyou.com/disable-cookies/windows/edge/s">Disabling cookies in Edge</Link>
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647&p=cpn_cookies">
              Disabling cookies in Google Chrome
            </Link>
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection">
              Disabling cookies in Mozilla Firefox
            </Link>
          </p>
          <p>
            🔗 \*{' '}
            <Link to="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac">
              Disabling cookies in Apple Safari
            </Link>
          </p>
          <h2>Google Analytics</h2>
          <p>📈 The cookies in use to deliver Google Analytics service are described below.</p>
          <p>Returning, New Session, Time, Custom Variable Data, Source</p>
          <div>
            <ul>
              <li>- \_\_utma</li>
              <li>- \_\_utmb</li>
              <li>- \_\_utmc</li>
              <li>- \_\_utmv</li>
              <li>- \_\_utmz</li>
            </ul>
          </div>
          <h3>Analytics Cookie Types</h3>
          <p>- \_\_utma</p>
          <p>
            🤚 This cookie is used to determine new and returning visitors. It has an expiration time of 2 years. If the
            ga.js library is executed and no \_\_utma cookie exists, this will be recorded as the users’ first visit and
            a \_\_utma cookie will be set. If a \_\_utma cookie is already in place, the expiration time is reset and
            the user is recorded as a return visitor.
          </p>
          <p>- \_\_utmb</p>
          <p>
            🤚 This cookie is used to determine a new session. The cookie is set when the ga.js library executes and
            there is no \_\_utmb cookie in place. It has an expiration time of 30 minutes, therefore if a user is
            inactive for a period longer than this, a new cookie will be set when the library executes and the
            interaction will be recorded as a new session.
          </p>
          <p>- \_\_utmz</p>
          <p>
            🤚 This cookie is used to determine the traffic source, medium, campaign name and campaign term which
            delivered the user to your website. It is created when the javaScript library executes and expires after 6
            months. This helps Google collect the data which can then help them to determine which traffic sources
            assist conversions within the multi-channel section of Analytics.
          </p>
          <p>- \_\_utmc</p>
          <p>
            🤚 This Cookie waits 30 minutes, and then it expires. You see, \_\_utmc has no way of knowing when a user
            closes their browser or leaves a website, so it waits 30 minutes for another pageview to happen, and if it
            doesn’t, it expires. And is used to store information, such as what time your current visit occurred,
            whether you have been to the site before, and what site referred you to the web page.
          </p>
          <p>
            From Stackoverflow: 🔗 \*{' '}
            <Link to="https://stackoverflow.com/questions/1823406/what-does-utma-mean">What does \_\_utma mean?</Link>
          </p>
          <p>- \_\_utmv</p>
          <p>
            🤚 This cookie is used for storing visitor-level custom variable data. It is created when the
            \_\_setCustomVar method is used with a visitor level custom variable. Like the \_\_utma cookie, this cookie
            expires after 2 years and is reset each time the user visits your site before the expiration of the cookie.
          </p>
          <p>
            Although each of these cookies has a set expiration time, each time the ga.js library is executed and the
            expiration time has not been met the cookie is updated, resetting the expiration date to its original value.
          </p>
          <p>
            These cookies contain no personally identifiable information but they will use your computer's IP address to
            know from where in the world you are accessing the Internet.
          </p>
          <p>
            Google stores the information collected by these cookies on servers in the United States. Google may
            transfer this information to third-parties where required to do so by law, or where such third-parties
            process the information on Google's behalf.
          </p>
          <h3>Opt-out</h3>
          <p>
            😜 In order to provide website visitors with more choice on how data is collected by Google Analytics,
            Google has developed the Google Analytics Opt-out Browser Add-on. The add-on communicates with the Google
            Analytics JavaScript (ga.js) to stop data being sent to Google Analytics. The Google Analytics Opt-out
            Browser Add-on does not affect usage of the website in any other way. A link to further information on the
            Google Analytics Opt-out Browser Add-on is provided below for your convenience.
          </p>
          <h3>Opt Out Google tools</h3>
          <p>
            🔗 \* <Link to="https://tools.google.com/dlpage/gaoptout?hl=None">Opt Out Google tools</Link>
          </p>
          <p>
            ⚒️ For more information on the usage of cookies by Google Analytics please see the Google website. A link to
            the privacy advice for this product is provided below for your convenience.
          </p>
          <h2>Hubspot hstc Cookie</h2>
          <p>🥠 About this cookie \_\_hstc</p>
          <p>
            This cookie name is associated with websites built on the HubSpot platform. It is reported by them as being
            used for website analytics.
          </p>
          <p>The main purpose of this cookie is: Performance</p>
          <h3>Key numbers for hstc</h3>
          <p>🗝️ Cookies with this name have been found on 316 websites, set by 269 host domains.</p>
          It has been found as a First Party cookie on 277 websites and a Third Party cookie on 71 websites. It has been
          found as a Persistent cookie on 348 websites, with an average life span of 725 days.
          <p>It has been found as a Session cookie on 0 websites.</p>
          <p>
            Note: Many technologies or services use cookies that will be common to different websites and can be
            identified by name alone. However this is not always true. More specific information can sometimes be found
            with a website based search.
          </p>
          <h2>Privacy Google</h2>
          <p>
            🔗 \* <Link to="https://www.google.com/analytics/learn/privacy.html">Privacy Google</Link>
          </p>
          <p>
            🗠 Google Analytics is a web analytics tool I use to help understand how visitors engage with this website.
            It reports website trends using cookies and web beacons without identifying individual visitors.
          </p>
          <h3>Read Analytics Policy</h3>
          <p>
            🔗 \* <Link to="https://www.google.com/analytics/learn/privacy.html)">Analytics Policy</Link>
          </p>
          <h2>Google AdSense</h2>
          💹 Google AdSense, a third party affiliate marketing network, uses cookies to help make sure I get a
          commission when you buy a product after clicking on a link or ad banner that takes you to the site of one of
          their merchants.
          <h3>Read AdSense Policy</h3>
          🔗 \* <Link to="https://support.google.com/adsense/bin/answer.py?hl=en&answer=48182">AdSense Policy</Link>
          <h3>Create Your Own</h3>
          <p>🦸 Google AdSense Privacy Policy creator</p>
          🔗 \* <Link to="https://www.termsfeed.com/blog/privacy-policy-google-adsense/">Google AdSense</Link>
          <h2>Subscriptions</h2>
          <p>
            If you choose to sign up for our Subscriptions email newsletter (we hope you will), we use Netlify Forms to
            my SlackBot. You’re free to unsubscribe at any time. If you want us to delete your entire history at any
            time, contact donboulton@gmail.com and we’ll do that.
          </p>
          <p>We’ll email you about:</p>
          <p>
            New articles we think you will be interested in reading. Products that we think you will be interested in
            learning about. We won’t sell or rent your data to anyone else.
          </p>
          <h2>Donation Policy</h2>
          🩸 All Donations thought our external pay sites and or through our PayPal buttons will not be refundable, as
          they are a donation to a free website designer, that has limited ability's to do money transfers back to you.
          Thank You for your donations to Bibwoe.com.
          <h2> Comment Policy</h2>
          🩸 We want you to feel at home when you post a comment on Bibwoe.com. We want everyone to feel at home posting
          comments on Bibwoe.com. We don’t know what your home is like, but we know how we expect people to behave when
          they visit ours. That’s why we reserve the right to delete comments and ban users as needed to keep the
          comment threads here civil and substantive.
          <h3>1 house rule is simple</h3>
          <h4>Don’t be a jerk</h4>
          <p>
            Want to be the kind of commenter we’d love to bring home to Thanksgiving dinner? Here’s what we like to see
            in comments:
          </p>
          <p>Weigh in with smart, informed ideas that contribute further to the story.</p>
          <p>Give us useful, constructive criticism. Spot a typo or an error? Let us know and we will correct it.</p>
          <p>Demonstrate and share the intelligence, wisdom, and humor we know you possess.</p>
          <h2>Disclosure Policy</h2>
          <p>
            🩸 I make money on this website through affiliate programs. If you click an affiliate link or ad banner and
            buy the product, you help support this website because I'll get a percentage of that sale.
          </p>
          <p>
            Donald Boulton and this 🔗 \*{' '}
            <Link to="https://bibwoe.com"> 🗸 Website is a Affiliate for Google AdSense.</Link>
          </p>
          <p>What this means for you:</p>
          <div>
            <ul>
              <li>
                - I became an affiliate to earn revenue towards the costs of running and maintaining this website. Where
                I have direct control over which ads are served on this website I offer only products that are directly
                related to the topic of this website and products that a reader/subscriber would have a genuine interest
                in or need of.
              </li>
              <li>- I do not and will not recommend a product just for the sake of making money.</li>
              <li>
                - I do not let the compensation I receive influence the content, topics, posts, or opinions expressed on
                this website.
              </li>
              <li>
                - I respect and value my readers too much to write anything other than my own genuine and objective
                opinions and advice.
              </li>
            </ul>
          </div>
          <p>
            Just like this website, my Disclosure Policy is a work in progress. As the revenue streams evolve, so will
            this page.
          </p>
          <h2>Attribution</h2>
          Working
          <h2> Purchases</h2>
          <h3>Purchase Policy</h3>
          working
          <h3>Return Policy</h3>
          working
        </div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Link to="/" className="button">
            <RiArrowLeftSLine
              className="button-icon"
              style={{
                fontSize: '1.5rem',
                color: 'gray',
              }}
            />
            Back to Homepage
          </Link>
          <Link
            to="/posts/creation-of-all"
            className="button -outline"
            rel="noopener noreferrer"
            target="_blank"
            area-label="PubliusLogic"
          >
            Next Page
            <RiArrowRightSLine
              className="button-icon"
              style={{
                fontSize: '1.5rem',
                color: 'gray',
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Privacy

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
  return (
    <>
      <Seo type="page" title="privacy" description="Privacy" image={ogimage} pathname="/privacy">
        <title>privacy</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content="privacy" />
        <meta property="og:description" content="privacy Page" />
        <meta property="twitter:title" content="privacy" />
        <meta property="twitter:description" content="privacy Page" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Seo>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          about: {
            '@id': 'https://bibwoe.com',
          },
          audience: 'public',
          abstract:
            'bibwoe has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          author: {
            '@id': 'https://donwboulton.com',
          },
          copyrightHolder: {
            '@id': 'https://bibwoe.com',
          },
          copyrightYear: 2025,
          creator: {
            '@id': 'https://bibwoe.com',
          },
          description: 'bibwoe name means Basic Instructions Books While On Earth',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          inLanguage: 'en',
          name: 'bibwoe',
          publisher: {
            '@id': 'https://bibwoe.com',
          },
          url: 'https://bibwoe.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Thank You',
          url: 'https://bibwoe.com/privacy',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mansbooks',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://bibwoe.com',
                name: 'bibwoe',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://bibwoe.com/privacy',
                name: 'privacy',
              },
              position: '2',
            },
          ],
          numberOfItems: '2',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://bibwoe.com',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donboulton@donboulton.com',
            telephone: '+405-863-2165',
          },
          description:
            'bibwoe has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donboulton@donboulton.com',
          founder: {
            '@id': 'https://donwboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'bibwoe',
          sameAs: [
            'mailto:donboulton@donboulton.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://bibwoe.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://donwboulton.com',
          name: 'Donald Boulton',
          url: 'https://donwboulton.com',
          worksFor: {
            '@id': 'https://bibwoe.com',
          },
        })}
      </script>
    </>
  )
}
