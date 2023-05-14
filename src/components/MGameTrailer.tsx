import useMTrailers from '../hooks/useMTrailers';

interface Props {
	id: string;
}

const MGameTrailer = ({ id }: Props) => {
	const { data, error, isLoading } = useMTrailers(id);
	console.log(data);
	if (isLoading) return null;

	if (error) throw error;

	const firstTrailer = data?.results[0];
	return (
		<video
			src={firstTrailer?.data['480']}
			poster={firstTrailer?.preview}
			controls>
			MTrailers
		</video>
	);
};

export default MGameTrailer;
