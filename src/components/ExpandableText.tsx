import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	content: string;
}

const ExpandableText = ({ content }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;
	const summary = expanded ? content : content.substring(0, limit) + '... ';

	return (
		<Text>
			{summary}
			<Button
				size='xs'
				fontWeight='bold'
        marginX='0.5rem'
        padding='0.8rem'
				onClick={() => setExpanded(!expanded)}>
				{expanded ? 'Show less' : 'Show more'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
