// Fisher–Yates shuffle
const shuffleArray = array => {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
};

const generateId = () => {
    return Math.random().toString(36).slice(2);
};

export const shuffle = cards => {
    const shuffledCards = shuffleArray(cards).slice(0, 10);

    return shuffleArray([...shuffledCards, ...shuffledCards]).map(card => ({
        id: generateId(),
        value: card,
    }));
};
