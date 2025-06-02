import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ logoUrl, logoText }: { logoUrl: string, logoText: string }) => {
    return (
        <Link href="/portfolio" className="text-gray-300">
            <Image src={logoUrl} alt={logoText} width={150} height={150} />
        </Link>
    );
};

export default Logo;