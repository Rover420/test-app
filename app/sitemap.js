export default function sitemap() {
    const locale = ['pl', 'en']

    return locale.flatMap(item => [
            {
                url: `https://mywebsite.vercel.app/${item}`,
                lastModified: new Date(),
            },
            {
                url: `https://mywebsite.app/${item}/register`,
                lastModified: new Date(),
            },
            {
                url: `https://mywebsite.app/${item}/signin`,
                lastModified: new Date(),
            },
        ]
    )
}