import * as React from 'react';

interface IDelayRenderProps {
  readonly timeout: number;
}

interface IDelayRenderState {
  readonly canRender: boolean;
}

export class DelayRender extends React.PureComponent<IDelayRenderProps, IDelayRenderState> {
  public readonly state = {
    canRender: false,
  };

  public componentWillMount() {
    setTimeout(
      () => {
        this.setState({
          canRender: true,
        });
      },
      this.props.timeout,
    );
  }

  public render() {
    if (!this.state.canRender) {
      return null;
    }

    return this.props.children;
  }
}
