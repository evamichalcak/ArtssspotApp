const fontHandler = (state={fontLoaded: false}, action) => {
	console.log('fontloader executing', action.type);
  switch (action.type) {
      case 'FONT_LOADED':
       console.log('action is font_loaded');
        return {
          fontLoaded: action.loaded,
        };
      default:
        return state;
    }
};

export default fontHandler;

export const getFontReady = (state) => state.fontLoaded;