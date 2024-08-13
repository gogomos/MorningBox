import { Box, Grid, Section, Theme } from '@radix-ui/themes';
import Nav from '../../components/nav/Nav';
import Link from 'next/link';
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
                  <Theme accentColor="jade">

            <Nav/>
            {children}
            <Section p={'6rem'}>
        <Grid columns={'3'}>
          <Box className="text-sm text-gray-600"> 2023 Your Company</Box>
          <Box>
            <h6 className="text-sm text-gray-600">Follow Us</h6>
            <ul className="flex flex-col list-none mb-0">
              <li className=" inline-block mr-4">
                <Link href="https://twitter.com/yourcompany">Twitter</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="https://facebook.com/yourcompany">Facebook</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="https://instagram.com/yourcompany">Instagram</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="https://linkedin.com/yourcompany">LinkedIn</Link>
              </li>
            </ul>
          </Box>
          <Box>
            <h6 className="text-sm text-gray-600">Quick Links</h6>
            <ul className="flex flex-col list-none mb-0">
              <li className="inline-block mr-4">
                <Link href="/about">About Us</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="/faqs">FAQs</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </Box>
        </Grid>
      </Section>
            </Theme>
            
        </section>
    );
}