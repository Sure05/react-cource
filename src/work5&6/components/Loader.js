import React from 'react'
import { Dimmer, Loader} from 'semantic-ui-react'

const LoaderComponent = (active) => (
	<Dimmer active={active}>
		<Loader />
	</Dimmer>
)

export default LoaderComponent