import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    href: string;
    title: string;
    admin?: boolean;
};

const NavLink = ({ href, title, admin }: Props) => {
    const router = useRouter();
    return admin ? (
        <Link
            href={href}
            className={router.pathname == href ? 'dark:bg-white dark:text-black z-10 bg-black text-white w-full h-full rounded-full flex items-center justify-center transition-all' : ''}
            legacyBehavior>
            {title}
        </Link>
    ) : (
        <Link
            href={href}
            className={router.pathname == href ? 'active ' : ''}
            legacyBehavior>
            {title}
        </Link>
    );
};

export default NavLink;
