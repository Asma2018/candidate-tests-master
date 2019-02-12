import ask from './Api';

/*
*
* Tests, add the one listed test and minimum 2 more
* -------------------------------------
* - 'it should call YesNo API'
* - *
* - *
* -------------------------------------
*
* Please add any other test that you think could be missing
*
* */


describe('API Caller', () => {
    it('should call YesNo API', () => {
        const fetchSpy = jest.spyOn(global, 'fetch');

        return ask()
            .then(() => {
                expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/');
            });
    });
});

