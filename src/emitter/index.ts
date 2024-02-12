interface EventProps {
    [eventName: string]: any[];
  }
  interface EmitterProps {
    events: EventProps;
    dispatch: (event: string, data: any) => void;
    subscribe: (event: string, callback: (data: any) => void) => void;
  }
  const Emitter: EmitterProps = {
    events: {},
    dispatch(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((callback: (data: any) => void) =>
          callback(data)
        );
      }
    },
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  };
  
  export default Emitter;