const MissionCommander = require('./../app/missionCommander');
describe("Unit Test for Mission Commander class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa")
    })
})