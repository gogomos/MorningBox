import { Theme } from '@radix-ui/themes';
import Nav from '../../components/nav/Nav';
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
                  <Theme accentColor="jade">

            <Nav/>
            {children}
            </Theme>
        </section>
    );
}