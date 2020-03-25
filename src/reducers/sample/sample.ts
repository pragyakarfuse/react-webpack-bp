import { ISampleState, SampleActionType } from './sample.d';
import { FILL_SAMPLE_ACTION } from 'src/constants/actions';

const initialSampleState: ISampleState = {
  initial: 'react-webpack-bp',
  data: []
};

export default (state = initialSampleState, action: SampleActionType) => {
  switch (action.type) {
    case FILL_SAMPLE_ACTION: {
      return {
        ...state,
        data: action.payload.data
      };
    }
  }
};
