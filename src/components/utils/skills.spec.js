import { filterSkills } from './skills';

const skillName = ['adobe photoshop'];
const unmatchedSkillName = ['affinity designer'];
const undefinedSkillName = undefined;
const json = [{ name: 'adobe photoshop' }];

describe('filterSkills', () => {
  describe('existing skill', () => {
    const filteredSkills = filterSkills(skillName, json);

    it('returns an array', () => {
      expect(filteredSkills).toBeInstanceOf(Array);
    });

    it('has 1 length', () => {
      expect(filteredSkills.length).toBe(1);
    });
  });

  describe('no matching skill', () => {
    const filteredSkills = filterSkills(unmatchedSkillName, json);

    it('returns an array', () => {
      expect(filteredSkills).toBeInstanceOf(Array);
    });

    it('has 0 length', () => {
      expect(filteredSkills.length).toBe(0);
    });
  });

  describe('undefined skill', () => {
    const filteredSkills = filterSkills(undefinedSkillName, json);

    it('returns an array', () => {
      expect(filteredSkills).toBeInstanceOf(Array);
    });

    it('has 0 length', () => {
      expect(filteredSkills.length).toBe(0);
    });
  });
});
