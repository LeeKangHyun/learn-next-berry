import { Component, ReactNode, ErrorInfo } from 'react';

type Props = {
  children: ReactNode,
}

type State = {
  hasError: boolean,
}

const initialState: State = { hasError: false };

export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(_: Error): State {
    return {
      hasError: true,
    };
  }

  state = initialState;

  componentDidMount() {
    console.log('Error Boundary exists');
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log('cdu');
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('hasError!!!!!!: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Has Error....</h1>;
    }
    return this.props.children;
  }
}
