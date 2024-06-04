import getVideoSrc from "@/utils/getVideoSrc"

export default async function VideoComponent() {
    const src = await getVideoSrc()
    return <iframe src={src} frameBorder="0" allowFullScreen title="Video pitch about me" loading="lazy" />
}