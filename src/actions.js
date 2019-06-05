export const inc = () => ({ type: 'INC' });

export const dec = () => ({ type: 'DEC' });

export const rnd = (payload) => {
    return {
        type: 'RND',
        payload: Math.ceil(Math.random() * 10)
    }
};