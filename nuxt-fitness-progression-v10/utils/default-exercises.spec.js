import defaultExercises from './default-exercises'

describe('Utility > get-default-exercises', () => {
  test('defaultExercises matches defaults object', () => {
    expect(defaultExercises).toMatchObject([
      {
        name: 'Cardio & Conditioning',
        description:
          'Jogging, jumping jacks, mountain climbers, air squats and any other suitable cardio exercise with or without weights.',
      },
      {
        name: 'Warmup',
        description: 'Spend a few minutes warming up.',
      },
      {
        name: 'Cooldown',
        description: 'Spend a few minutes cooling down.',
      },
      {
        name: 'Stretching',
        description: 'Spend a few minutes stretching recently used muscles.',
      },
      {
        name: 'Flat Press, Barbell',
        description: 'Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Incline Press, Barbell',
        description: 'Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Decline Press, Barbell',
        description: 'Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Pushups',
        description: 'Do 3-5 sets of 10-20 reps.',
      },
      {
        name: 'Front and Side Raises, Dumbbell',
        description:
          'Extend arms forward then outward. Do 3 sets of 8-10 reps.',
      },
      {
        name: 'Seated Military Press, Barbell',
        description: 'Sit nearly upright and weight up. Do 3 sets of 5-8 reps.',
      },
      {
        name: 'Skull Crushers',
        description:
          'Lower weight behind head using elbows while laying down. Do 3 sets of 8 reps.',
      },
      {
        name: 'Tricep Kickbacks, Dumbbell',
        description:
          'Lean over and straigthen elbos back. Do 3 sets of 8 reps.',
      },
      {
        name: 'Bent Over Rows, Barbell',
        description: 'Brace hard! Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Shrugs, Barbell',
        description: 'Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Deadlifts, Barbell',
        description: 'Brace hard! Do 3-5 sets of 5 reps.',
      },
      {
        name: 'Stiff Leg Deadlifts, Barbell',
        description: 'Brace hard! Do 3-5 sets of 5-8 reps',
      },
      {
        name: 'Pullups',
        description: 'Do 3-5 sets of 8-10 reps.',
      },
      {
        name: 'Standing T-Rows, Barbell',
        description: 'Do 3-5 sets of 8-10 reps.',
      },
      {
        name: 'Overhand Curls, Dumbbell',
        description: 'Do 3-5 sets of 8 reps.',
      },
      {
        name: 'Underhand Curls, Dumbbell',
        description: 'Do 3-5 sets of 8 reps.',
      },
      {
        name: 'Hammer Curls, Dumbbell',
        description: 'Do 3-5 sets of 8 reps.',
      },
      {
        name: 'Squats, Barbell',
        description: 'Brace hard! Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Hip Thrusters, Barbell',
        description: 'Do 3-5 sets of 5-8 reps.',
      },
      {
        name: 'Russian Twist, Dumbell',
        description: 'Do 3-5 sets of 20-30 reps.',
      },
      {
        name: 'Oblique Side Bends, Dumbell',
        description:
          'Lower and lift weight along side of body with arms straight. Do 3-5 sets of 20-30 reps.',
      },
    ])
  })
})
