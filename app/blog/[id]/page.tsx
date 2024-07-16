type Props = {
    params: {
        id: string
    }
}

export default function Post({ params: { id }}: Props) {
    return <h1>Blog page {id}</h1>;
}