export const workoutDays = [
  {
    day: 'Mon', tag: 'Push', tc: 'ts',
    title: 'Upper Body Push - Chest + Shoulders + Triceps',
    dur: '55-60 min', split: 'Strength', focus: 'Chest / Shoulders / Triceps',
    groups: [
      {
        label: 'Warm-up (Mandatory)',
        exs: [
          {
            name: 'Neck Circles + Shoulder Mobility', sets: '2 x 30 sec each',
            note: 'Critical for your neck and shoulder condition. Do slow, deliberate circles forward and backward.',
            gif: 'cat_cow', instr: ['Stand upright. Slowly roll neck in a full circle clockwise 5 times.', 'Reverse direction 5 times.', 'Then rotate both shoulders backward 10 times, then forward 10 times.']
          },
          {
            name: 'Cat-Cow Stretch', sets: '2 x 10 reps',
            note: 'Loosens thoracic spine and lower back stiffness before any loading.',
            gif: 'cat_cow', instr: ['Get on hands and knees, wrists under shoulders, knees under hips.', 'Inhale - drop belly, lift head and tailbone (cow position).', 'Exhale - round spine, tuck chin and pelvis (cat position).', 'Move slowly and breathe with each rep.']
          },
          {
            name: 'Band Pull-Aparts', sets: '2 x 15 reps',
            note: 'Activates rotator cuff before pressing. Do this before every upper body session.',
            gif: 'face_pull', instr: ['Hold a resistance band at shoulder width with both hands, arms extended in front.', 'Pull band apart by moving hands out to sides, squeezing shoulder blades together.', 'Control the return slowly. Band stretches to chest width.', 'Keep arms at shoulder height throughout.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Barbell Bench Press', sets: '4 x 10 reps',
            note: 'Start at 40-50% of max weight. Full range of motion - bar touches chest. Feet flat on floor.',
            gif: 'bench_press', instr: ['Lie flat on bench. Grip bar slightly wider than shoulder width.', 'Unrack bar and position over lower chest.', 'Lower bar to chest in a controlled 2-second descent.', 'Press back up explosively. Do not bounce bar off chest.']
          },
          {
            name: 'Incline Dumbbell Press', sets: '3 x 12 reps',
            note: 'Weeks 1-4: Replace with Cable Chest Fly if shoulder pain exists. Use 30-45 degree bench angle only.',
            gif: 'incline_press', instr: ['Set bench to 30-45 degrees.', 'Hold dumbbells at shoulder width, palms forward.', 'Lower dumbbells to chest level in a controlled motion.', 'Press up until arms nearly straight. Keep back flat against bench.']
          },
        ]
      },
      {
        label: 'Isolation Exercises',
        exs: [
          {
            name: 'Cable Lateral Raises', sets: '3 x 15 reps',
            note: 'Much safer for rotator cuff than dumbbell lateral raises. Always use cables for shoulder work.',
            gif: 'lateral_raise', instr: ['Stand sideways to cable machine with handle on low pulley.', 'Raise arm out to side until parallel to floor.', 'Lower slowly - 3 seconds down.', 'Do not shrug shoulders. Control the movement.']
          },
          {
            name: 'Cable Face Pulls', sets: '4 x 15 reps',
            note: 'PRIORITY: Do this EVERY session. Rebuilds rotator cuff and rear delts. Non-negotiable.',
            gif: 'face_pull', instr: ['Set cable at face height with rope attachment.', 'Pull rope toward face, elbows flaring out to sides.', 'At end position, externally rotate - hands go wide past ears.', 'Hold 1 second. Return slowly.']
          },
          {
            name: 'Tricep Rope Pushdown', sets: '3 x 12 reps',
            note: 'Keep elbows locked to sides throughout. Squeeze triceps hard at the bottom.',
            gif: 'tricep_push', instr: ['Stand at cable machine with rope attachment set high.', 'Elbows at 90 degrees and tucked to sides.', 'Push rope down until arms fully extended. Spread rope apart slightly at bottom.', 'Return slowly. Elbows stay pinned to sides throughout.']
          },
          {
            name: 'Overhead Tricep Extension (Cable)', sets: '3 x 12 reps',
            note: 'Use cable - gentler on shoulder than dumbbell overhead. Face away from machine.',
            gif: 'tricep_push', instr: ['Face away from cable machine, rope attachment set low.', 'Hold rope overhead with both hands, elbows bent beside ears.', 'Extend arms forward and up until straight.', 'Return slowly. Keep upper arms stationary - only forearms move.']
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Treadmill Incline Walk', sets: '15 min / 5.5-6 km/h / 5 deg incline',
            note: 'Zone 2 fat-burning cardio. Heart rate at 120-135 bpm. You should be able to hold a conversation.',
            gif: 'treadmill', instr: ['Set treadmill to 5 degree incline and speed 5.5-6 km/h.', 'Walk with good posture. Do not lean on handrails.', 'Maintain steady pace for full 15 minutes.', 'This burns more fat than flat walking at same speed.']
          },
        ]
      },
    ]
  },
  {
    day: 'Tue', tag: 'Cardio', tc: 'tc',
    title: 'Cardio + Core Day',
    dur: '45-50 min', split: 'Cardio + Core', focus: 'Fat Burn / Stamina / Core Stability',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Light Jog or Cycling', sets: '5 min easy',
            note: 'Gradual heart rate elevation before sustained cardio.',
            gif: 'treadmill', instr: ['Start at very easy pace - 4-5 km/h jog or easy bike.', 'Breathe naturally and let heart rate rise gradually.']
          },
        ]
      },
      {
        label: 'Main Cardio - LISS (25-30 min)',
        exs: [
          {
            name: 'Treadmill or Elliptical', sets: '25-30 min / 65-70% max HR',
            note: 'Keep HR at 120-135 bpm. Fat oxidation sweet spot. You should be able to speak full sentences.',
            gif: 'treadmill', instr: ['Set treadmill to moderate pace or elliptical to moderate resistance.', 'Maintain consistent effort throughout. Do not sprint then walk.', 'Stay in HR zone 2 (120-135 bpm) the entire time.']
          },
          {
            name: 'Stationary Bike (alternate weeks)', sets: '25 min / moderate resistance',
            note: 'Low impact - excellent on bad back days. Alternate with treadmill each week.',
            gif: 'treadmill', instr: ['Set seat height so knee is slightly bent at bottom of pedal stroke.', 'Moderate resistance - you should be working but not gasping.', 'Maintain 80-90 RPM cadence. Keep back straight.']
          },
        ]
      },
      {
        label: 'Core Circuit - 3 Rounds',
        exs: [
          {
            name: 'Plank', sets: '30-45 sec hold',
            note: 'Flat back like a tabletop. Breathe normally. Progress to 60 seconds over the weeks.',
            gif: 'plank', instr: ['Forearms on floor, elbows under shoulders.', 'Body in straight line from head to heels.', 'Engage core - pull navel toward spine.', 'Do not let hips sag or rise. Breathe steadily.']
          },
          {
            name: 'Dead Bug', sets: '10 reps each side',
            note: 'Perfect for lower back stiffness rehab. Press lower back firmly to floor the entire time.',
            gif: 'dead_bug', instr: ['Lie on back, arms pointing to ceiling, knees at 90 degrees in the air.', 'Press lower back FIRMLY into floor - maintain this throughout.', 'Slowly extend right arm overhead and left leg out simultaneously.', 'Return to start. Repeat with left arm and right leg.']
          },
          {
            name: 'Bicycle Crunches', sets: '20 reps each side',
            note: 'Slow and controlled. Feel the oblique contraction. Do not pull your neck.',
            gif: 'bicycle', instr: ['Lie on back, hands lightly behind ears.', 'Bring right elbow toward left knee while extending right leg.', 'Alternate sides in a slow, controlled pedaling motion.', 'Focus on rotation - do not just move elbows.']
          },
          {
            name: 'Bird Dog', sets: '12 reps each side',
            note: 'Excellent for lower back rehab and core stability. Hold 2 seconds at full extension.',
            gif: 'bird_dog', instr: ['On hands and knees. Brace core with spine neutral.', 'Extend right arm forward and left leg back simultaneously.', 'Hold 2 seconds. Resist rotating or tilting.', 'Return and repeat on other side. Move slow and deliberate.']
          },
        ]
      },
    ]
  },
  {
    day: 'Wed', tag: 'Legs', tc: 'ts',
    title: 'Lower Body - Quads + Hamstrings + Glutes',
    dur: '55-60 min', split: 'Strength', focus: 'Quads / Hamstrings / Glutes / Calves',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Hip Circles + Leg Swings', sets: '2 x 10 each direction',
            note: 'Open up hip flexors before squatting. Essential to do this.',
            gif: 'cat_cow', instr: ['Stand on one leg, swing other leg forward/back 10 times.', 'Do hip circles: hands on hips, rotate hips in large circles. 10 each direction.', 'Leg swings side-to-side also - 10 each leg.']
          },
          {
            name: 'Bodyweight Squats', sets: '2 x 15 reps',
            note: 'Activates glutes and quads. Go to full depth. Warm up the movement pattern.',
            gif: 'squat', instr: ['Feet shoulder-width apart, toes slightly out.', 'Arms extended forward for balance.', 'Squat down until thighs parallel to floor or deeper.', 'Push through heels to stand. Keep chest tall.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Barbell Back Squat', sets: '4 x 10 reps',
            note: 'Most powerful fat-burning + muscle building exercise. Squat to parallel. Keep chest tall.',
            gif: 'squat', instr: ['Bar on upper traps. Feet shoulder-width, toes 15-30 degrees outward.', 'Take a big breath and brace core tightly.', 'Squat down - knees track over toes, hips go back and down.', 'Go to parallel (thighs horizontal) or deeper.', 'Drive through heels to stand. Exhale at top.']
          },
          {
            name: 'Romanian Deadlift (RDL)', sets: '4 x 10 reps',
            note: 'Stretches and strengthens hamstrings. Reduces lower back stiffness with consistent practice.',
            gif: 'rdl', instr: ['Hold barbell at hip level, shoulder-width grip.', 'Soft bend in knees - maintain throughout.', 'Hinge at hips - push hips BACK, not down.', 'Lower bar along legs until strong hamstring stretch.', 'Drive hips forward to return to standing. Keep back flat.']
          },
        ]
      },
      {
        label: 'Accessory Exercises',
        exs: [
          {
            name: 'Leg Press Machine', sets: '3 x 12 reps',
            note: 'Easier on lower back than squats. Push through heels. Do not lock knees at top.',
            gif: 'leg_press', instr: ['Sit with back flat against pad, feet shoulder-width on platform.', 'Release safety handles. Bend knees to 90 degrees.', 'Push platform away through heels and mid-foot.', 'Lower slowly in 2-3 seconds, push up explosively.']
          },
          {
            name: 'Lying Leg Curl Machine', sets: '3 x 12 reps',
            note: 'Full range of motion. Squeeze hamstrings at top. Lower slowly for 3 seconds.',
            gif: 'leg_curl', instr: ['Lie face down on machine, pad behind ankles.', 'Curl legs up toward glutes in a smooth arc.', 'Pause briefly at top and squeeze hamstrings.', 'Lower slowly (3 seconds). Keep hips on pad.']
          },
          {
            name: 'Walking Lunges', sets: '3 x 12 each leg',
            note: 'Burns significant calories. Keep torso upright. Front knee must stay above ankle.',
            gif: 'lunge', instr: ['Stand with dumbbells in hands (optional).', 'Step forward with right foot, lower left knee toward floor.', 'Front knee should be directly over ankle, not past toes.', 'Push off front foot to step forward. Keep torso upright.']
          },
          {
            name: 'Standing Calf Raises', sets: '3 x 15 reps',
            note: 'Full range. Pause 1 second at top. Use the calf raise machine or edge of a step.',
            gif: 'calf', instr: ['Stand with balls of feet on edge of step.', 'Lower heels as far as possible for full stretch.', 'Rise up onto toes as high as possible.', 'Hold top position for 1 second. Lower slowly.']
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Stairmaster / Step Machine', sets: '12 min / moderate pace',
            note: 'One of the highest calorie burn finishers in the gym. Also activates glutes strongly.',
            gif: 'stairmaster', instr: ['Set machine to moderate speed (levels 6-8 out of 20).', 'Do not lean heavily on handrails - use for balance only.', 'Take full steps with foot fully on step.', 'Maintain upright posture. Engage core. 12 minutes steady.']
          },
        ]
      },
    ]
  },
  {
    day: 'Thu', tag: 'Rest', tc: 'tr',
    title: 'Active Recovery Day',
    dur: '20-30 min light', split: 'Recovery', focus: 'Mobility / Stretching / Walk',
    groups: [
      {
        label: 'Active Recovery Protocol',
        exs: [
          {
            name: 'Outdoor Walk - aim 8-10k steps', sets: '30-40 min',
            note: 'Fresh air and Zone 1 gentle movement. This is NOT a workout. Enjoy it.',
            gif: 'treadmill', instr: ['Walk at comfortable conversation pace.', 'Focus on breathing and relaxing.', 'Use this time to listen to music or podcasts.', 'No target pace - just move and recover.']
          },
          {
            name: 'Full Body Stretching', sets: '10-15 min',
            note: 'Focus: hamstrings, hip flexors, chest, shoulders, neck. Hold each stretch 30+ seconds.',
            gif: 'stretch', instr: ['Hold each stretch 30-45 seconds.', 'Never stretch to pain - discomfort only.', 'Key: standing quad, seated hamstring, doorway chest, neck side stretch, hip flexor lunge.', 'Breathe deeply and relax into each position.']
          },
          {
            name: 'Foam Rolling', sets: '5-10 min',
            note: 'Upper back, IT band, calves, quads. Roll slowly and pause on tight spots for 5-10 seconds.',
            gif: 'foam_roll', instr: ['Roll each area slowly at 1 inch per second.', 'When you find a tight spot, stop and hold for 5-10 seconds.', 'Key areas: upper/mid back, IT band (side of thigh), calves, quads.', 'Apply comfortable pressure - not excruciating.']
          },
        ]
      },
      {
        label: 'Optional',
        exs: [
          {
            name: 'Beginner Yoga - 10-15 min', sets: 'Any YouTube beginner video',
            note: 'Especially good for neck and back stiffness. Search: yoga for back pain beginners.',
            gif: 'stretch', instr: ['Search YouTube for yoga for lower back pain beginners or yin yoga neck and shoulders.', 'Follow along at your own pace.', 'Child pose, pigeon pose, supine spinal twist are all excellent.', 'Even 10 minutes 2-3 times per week makes a difference.']
          },
        ]
      },
    ]
  },
  {
    day: 'Fri', tag: 'Pull', tc: 'ts',
    title: 'Upper Body Pull - Back + Biceps',
    dur: '55-60 min', split: 'Strength', focus: 'Back / Biceps / Rear Delts / Posture',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Band Pull-Aparts + Face Pulls', sets: '2 x 15 each',
            note: 'Always warm up pulling muscles before loading them with heavy weight.',
            gif: 'face_pull', instr: ['Band pull-aparts: hold band in front at shoulder height, pull apart to chest level.', 'Face pulls with band: anchor at face height, pull toward face with external rotation.', 'Warm up both patterns before picking up heavier weights.']
          },
          {
            name: 'Cat-Cow + Thoracic Extensions', sets: '2 x 10',
            note: 'Open up the thoracic spine before rows.',
            gif: 'cat_cow', instr: ['Cat-cow as described on Monday.', 'Add thoracic extension: sit on heels, extend arms forward, let upper back open up.', 'This prepares the spine for heavy pulling movements.']
          },
        ]
      },
      {
        label: 'Main Compound Lifts',
        exs: [
          {
            name: 'Lat Pulldown', sets: '4 x 10 reps',
            note: 'Full stretch at top. Pull elbows down and back - not arms down. Squeeze lats at bottom.',
            gif: 'lat_pull', instr: ['Sit with knees under pad. Grip bar wider than shoulders.', 'Lean back slightly (10-15 degrees). Look up.', 'Pull bar to upper chest - lead with elbows, not hands.', 'Squeeze shoulder blades together at bottom.', 'Slowly return to full arm extension. Feel the lat stretch.']
          },
          {
            name: 'Seated Cable Row', sets: '4 x 10 reps',
            note: 'Squeeze shoulder blades together at end of each rep. Improves posture and reduces back pain.',
            gif: 'cable_row', instr: ['Sit with slight bend in knees, back straight.', 'Grip handles, arms extended - this is starting position.', 'Row handle to lower abdomen - pull elbows back past body.', 'Squeeze shoulder blades hard at the end.', 'Return slowly - full arm extension each rep.']
          },
        ]
      },
      {
        label: 'Accessory Exercises',
        exs: [
          {
            name: 'Single Arm Dumbbell Row', sets: '3 x 12 each side',
            note: 'Brace core. Big range of motion - elbow drives back, not up. Feel the lat working.',
            gif: 'db_row', instr: ['Place one knee and hand on bench for support.', 'Hold dumbbell in free hand, arm hanging.', 'Row dumbbell to hip/lower ribcage - elbow drives back.', 'At top, twist slightly to squeeze lat harder.', 'Lower fully. Keep back flat throughout.']
          },
          {
            name: 'Cable Face Pulls', sets: '4 x 15 reps',
            note: 'Every session. Non-negotiable shoulder health and rotator cuff exercise.',
            gif: 'face_pull', instr: ['Set cable to face height with rope.', 'Pull toward face - elbows flare OUT high.', 'At end: externally rotate hands wide past ears.', 'Hold 1 second. Feel the rear delts and rotator cuff work.']
          },
          {
            name: 'Barbell Bicep Curls', sets: '3 x 12 reps',
            note: 'Full range. No swinging the body. Squeeze at the top. Elbows stay at sides.',
            gif: 'bicep_curl', instr: ['Stand with barbell, underhand grip.', 'Elbows pinned to sides - they should not move.', 'Curl weight up by bending elbows only.', 'Squeeze biceps hard at top.', 'Lower slowly (3 seconds). Do not just drop weight.']
          },
          {
            name: 'Hammer Curls', sets: '3 x 12 reps',
            note: 'Neutral grip (palms facing in). Works brachialis for thicker overall arms.',
            gif: 'hammer_curl', instr: ['Hold dumbbells at sides, palms facing body.', 'Keep this neutral grip throughout - do not rotate.', 'Curl up to shoulder height.', 'Squeeze at top, lower slowly.']
          },
        ]
      },
      {
        label: 'Cardio Finisher',
        exs: [
          {
            name: 'Rowing Machine', sets: '10 min / moderate pace',
            note: 'Full body, low impact, excellent calorie burn. Perfect post-pull day finisher.',
            gif: 'rowing', instr: ['Sit on rower, feet strapped in, knees bent.', 'Sequence: legs push, then lean back, then pull arms to lower chest.', 'Return: extend arms, lean forward, bend knees.', 'Maintain steady rhythm. Do not yank with back.', 'Aim for 20-22 strokes per minute at moderate effort.']
          },
        ]
      },
    ]
  },
  {
    day: 'Sat', tag: 'HIIT', tc: 'th',
    title: 'HIIT + Full Body Functional Training',
    dur: '50-55 min', split: 'HIIT + Functional', focus: 'Max Fat Burn / Conditioning / Stamina',
    groups: [
      {
        label: 'Warm-up',
        exs: [
          {
            name: 'Jump Rope or Light Jog', sets: '3 min',
            note: 'Get heart rate up quickly to prepare for HIIT intensity.',
            gif: 'treadmill', instr: ['Jump rope for 3 min OR jog at easy pace.', 'Get heart rate to 100-110 bpm before starting HIIT.', 'Do 10 arm circles each direction and 10 leg swings each side.']
          },
        ]
      },
      {
        label: 'HIIT Circuit - 4 Rounds / 40 sec ON / 20 sec REST',
        exs: [
          {
            name: 'Jump Squats', sets: '40 sec ON / 20 sec REST',
            note: 'Highest calorie-burning bodyweight exercise. Land softly - absorb force with bent knees.',
            gif: 'jump_squat', instr: ['Feet shoulder width, toes slightly out.', 'Squat down to parallel.', 'Explode upward as high as possible.', 'Land softly with bent knees - do not land stiff-legged.', 'Immediately transition into next squat.']
          },
          {
            name: 'Mountain Climbers', sets: '40 sec ON / 20 sec REST',
            note: 'Core + cardio combined. Keep hips level - do not pike up or sag.',
            gif: 'mtn_climber', instr: ['Start in push-up position, hands under shoulders.', 'Drive right knee toward chest, then quickly switch to left.', 'Keep hips level - do not bob up and down.', 'Move as fast as possible while maintaining form.']
          },
          {
            name: 'Burpees', sets: '40 sec ON / 20 sec REST',
            note: 'Maximum calories per minute. Modified = step out instead of jump. Still very effective.',
            gif: 'burpee', instr: ['Full: jump feet out to plank, do push-up, jump feet in, jump up.', 'Modified: step feet out, step feet in, stand up (no jump).', 'Focus on moving continuously for the full 40 seconds.', 'This is the hardest exercise - expect to be breathing hard.']
          },
          {
            name: 'Kettlebell Swings', sets: '40 sec ON / 20 sec REST',
            note: 'Hip hinge power movement. Glutes drive the swing - not arms. Skip if lower back flares.',
            gif: 'kb_swing', instr: ['Feet slightly wider than shoulders, KB between feet.', 'Hinge at hips, grip KB. Swing it back between legs.', 'Explosively drive hips forward - KB swings up to shoulder height.', 'Arms just guide - hips power the movement.', 'Keep back flat throughout. Never round the lower back.']
          },
          {
            name: 'High Knees', sets: '40 sec ON / 20 sec REST',
            note: 'Drive knees to waist height. Use arms to pump. Keep core tight throughout.',
            gif: 'high_knees', instr: ['Run in place, driving knees up to waist level.', 'Pump arms aggressively - this drives knee height.', 'Land on balls of feet, not heels.', 'Full 40 seconds without stopping.']
          },
        ]
      },
      {
        label: 'Functional Strength - 2 Sets Each',
        exs: [
          {
            name: 'Goblet Squat', sets: '2 x 15 reps',
            note: 'Hold dumbbell at chest. Deep squat. Great for mobility and legs simultaneously.',
            gif: 'goblet_squat', instr: ['Hold dumbbell vertically at chest with both hands.', 'Feet shoulder-width, toes out.', 'Squat down as deep as possible - elbows inside knees at bottom.', 'Drive through heels to stand. Keep chest tall.']
          },
          {
            name: 'Push-ups', sets: '2 x 12 reps',
            note: 'Full range - chest to floor. Modify on knees if needed. Builds chest without shoulder strain.',
            gif: 'pushup', instr: ['Hands wider than shoulders, body in straight line.', 'Lower chest to floor - full range - touch the ground.', 'Push back up to start.', 'Modified: same movement but knees on floor.', 'Keep core tight throughout.']
          },
          {
            name: 'Dumbbell Deadlift', sets: '2 x 12 reps',
            note: 'Hinge at hips. Back flat. Lighter than barbell version - safe and effective.',
            gif: 'rdl', instr: ['Hold dumbbells in front of thighs.', 'Hinge at hips - push them back.', 'Lower weights along legs to mid-shin.', 'Drive hips forward to return to standing.', 'Keep back completely flat throughout.']
          },
        ]
      },
      {
        label: 'Cool-down',
        exs: [
          {
            name: 'Walk + Full Body Stretch', sets: '10 min total',
            note: 'Never skip after HIIT. Lowers cortisol. Prevents next-day soreness significantly.',
            gif: 'stretch', instr: ['Walk at easy pace for 5 minutes - let heart rate come down.', 'Then spend 5 minutes stretching: quads, hamstrings, hip flexors, shoulders, chest.', 'Hold each stretch 30 seconds.', 'Never stretch cold - always after walking first.']
          },
        ]
      },
    ]
  },
  {
    day: 'Sun', tag: 'Rest', tc: 'tr',
    title: 'Full Rest and Meal Prep Day',
    dur: 'Rest', split: 'Recovery', focus: 'Recovery / Sleep / Prep',
    groups: [
      {
        label: 'Rest Day Protocol',
        exs: [
          {
            name: 'Casual Walk Only', sets: 'No target - move naturally',
            note: 'Do not count this as exercise. Incidental movement only. Your body is building muscle now.',
            gif: 'treadmill', instr: ['Walk at completely comfortable, leisurely pace.', 'Enjoy the rest - recovery is when muscle is built.', 'No distance or step targets today.']
          },
          {
            name: 'Sleep 8 Hours Minimum', sets: 'Target: 10pm - 6am',
            note: 'Muscle is built and fat is burned during deep sleep. Growth hormone peaks at night.',
            gif: 'stretch', instr: ['Aim for consistent sleep and wake times.', 'Dark, cool room for best sleep quality.', 'No screens 30 min before bed.', 'This is THE most important recovery tool.']
          },
          {
            name: 'Weekly Meal Prep', sets: '30-45 min',
            note: 'Soak chana/rajma/dal Saturday night. Sunday: chop vegetables, prep oats mix.',
            gif: 'stretch', instr: ['Soak legumes overnight in water.', 'Sunday: boil and refrigerate soaked dal or rajma.', 'Wash and chop vegetables for 3 days ahead.', 'Measure and pre-pack snacks (makhana, sprouts, almonds).', 'This determines the quality of your entire week.']
          },
        ]
      },
    ]
  },
];

export const dietDays = [
  {
    day: 'Mon', title: 'Monday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl (upgraded)', detail: 'Oats 35g dry · Whey protein 20g (+5g) · Toned milk 50ml · Mix seeds 12g · Cocoa powder 7g · Banana 50g · Pomegranate 60g', cals: '~410 kcal', change: 'Increased whey by 5g for protein boost. Reduced fruit slightly to save 30 kcal.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Boiled Eggs x2 (NEW)', detail: '2 whole eggs boiled · Black pepper + rock salt · Optional: 1 extra egg white', cals: '~155 kcal', change: 'Added to hit daily protein target. Eggs raise HDL (good cholesterol).' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Chole + Roti', detail: 'Kabuli chana 55g dry · Atta 70g (2 rotis - down from 2.5) · Oil 7g · Onion-cucumber salad 100g', cals: '~545 kcal', change: 'Reduced roti from 2.5 to 2 rotis (-120 kcal). Increased salad for volume and fibre.' },
      { time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)', detail: 'Wheat bread 2 slices 67g · Peanut butter 16g · NO butter · Tea: milk 30ml + stevia (NO sugar)', cals: '~270 kcal', change: 'Removed butter (-50 kcal). Removed sugar (-32 kcal). Total savings: 82 kcal.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Arhar Dal + Rice', detail: 'Arhar/Toor dal 70g dry · Rice 45g (down from 55g) · Ghee 7g tadka', cals: '~445 kcal', change: 'Reduced rice by 10g (-36 kcal). Dal preserved for protein. Ghee in tadka is fine at 7g.' },
    ],
    macros: {cals: '1,825', p: '108g', c: '222g', f: '55g'  }
  },
  {
    day: 'Tue', title: 'Tuesday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Egg Bhurji + Toast (SWAP)', detail: '2 whole eggs + 1 egg white bhurji · Oil 5g · Wheat bread 1 slice 33g · Tea: milk 30ml + stevia', cals: '~340 kcal', change: 'Swap from PB toast. Better protein (20g vs 15g). Eggs raise HDL cholesterol.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Sprouts Chaat (NEW)', detail: 'Mixed moong/chana sprouts 80g raw · Onion + tomato + cucumber 50g · Lemon juice + chaat masala', cals: '~155 kcal', change: 'High protein slow-digesting snack. Great for pre-diabetic blood sugar management.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Rajma + Rice', detail: 'Rajma 55g dry · Rice 55g (down from 60g) · Oil 7g · Onion-cucumber salad 100g', cals: '~475 kcal', change: 'Reduced rice by 5g. Rajma is very high protein - keep at 55g. High fibre helps cholesterol.' },
      { time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea', detail: 'Corn kernels 80g · Peanuts 15g · Veggies 50g · Lemon + chaat masala · Tea: milk 30ml + stevia', cals: '~200 kcal', change: 'Removed sugar from tea (-32 kcal). Peanuts have heart-healthy monounsaturated fats.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Paneer Sabzi + Roti', detail: 'Paneer 60g · Atta 70g (2 rotis) · Oil 7g · Sabzi veggies (onion, tomato, capsicum) 100g', cals: '~490 kcal', change: 'Reduced roti to 2. Increased veggies for fibre and volume. Paneer preserved for protein.' },
    ],
    macros: {cals: '1,660', p: '106g', c: '206g', f: '58g'  }
  },
  {
    day: 'Wed', title: 'Wednesday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl', detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa powder 7g · Banana 50g · Pomegranate 60g', cals: '~410 kcal', change: 'Oats = best breakfast for cholesterol (beta-glucan fibre) and blood sugar control.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Roasted Makhana (NEW)', detail: 'Roasted makhana 30g · Lightly spiced with black pepper + salt', cals: '~100 kcal', change: 'Low-cal, high-fibre snack. Good for cholesterol. Easy to carry anywhere.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Aloo Gobi + Roti', detail: 'Potato 60g raw (down 20g) · Cauliflower 120g (up 20g) · Atta 70g (2 rotis) · Oil 8g · Curd/Raita 80g', cals: '~470 kcal', change: 'Reduced potato (high GI - important for pre-diabetic). More cauliflower (low GI + high fibre).' },
      { time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)', detail: 'Wheat bread 2 slices 67g · Peanut butter 16g · NO butter · Tea + stevia', cals: '~270 kcal', change: 'Same as Monday modification. No butter, no sugar.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Pea Mushroom Sabzi + Rice', detail: 'Green peas 70g · Mushroom 100g (up 20g) · Amul cream 15g (down 10g) · Rice 45g · Oil 7g', cals: '~340 kcal', change: 'Reduced cream (less saturated fat for cholesterol). More mushrooms (great for liver health).' },
    ],
    macros: {cals: '1,590', p: '99g', c: '204g', f: '55g'  }
  },
  {
    day: 'Thu', title: 'Thursday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'PB Toast + Tea (modified)', detail: 'Wheat bread 2 slices 67g · Peanut butter 20g (+4g) · NO butter · Tea: milk 30ml + stevia', cals: '~330 kcal', change: 'Added 4g extra PB to compensate removing butter. Heart-healthy monounsaturated fats.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Apple + Almonds (NEW)', detail: 'Apple 150g · Almonds 10g (8-10 pieces)', cals: '~150 kcal', change: 'Almonds raise HDL (good cholesterol). Apple = soluble pectin fibre that lowers LDL.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Egg Curry + Rice', detail: '2 whole eggs + 1 egg white (115g total) · Onion + tomato gravy 100g · Rice 55g · Oil 7g', cals: '~455 kcal', change: 'Added 1 egg white (+3.6g protein, only +17 kcal). More gravy vegetables for volume.' },
      { time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea', detail: 'Corn 80g · Peanuts 15g · Veggies 50g · Lemon · Tea + stevia', cals: '~200 kcal', change: 'Remove sugar from tea. Same great snack.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Masoor Dal + Roti', detail: 'Masoor dal 70g dry (up 5g) · Atta 70g (2 rotis) · Ghee 7g tadka', cals: '~555 kcal', change: 'Reduced roti to 2. Masoor dal = highest protein dal + highest fibre. Best for cholesterol and blood sugar.' },
    ],
    macros: {cals: '1,690', p: '112g', c: '216g', f: '54g'  }
  },
  {
    day: 'Fri', title: 'Friday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl', detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa 7g · Banana 50g · Pomegranate 60g', cals: '~410 kcal', change: 'Consistent Oats days keep glucose stable all morning. Good pre-workout nutrition.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Boiled Eggs x2 (NEW)', detail: '2 whole eggs boiled · Black pepper + salt', cals: '~155 kcal', change: 'Pre-workout protein. Friday is Pull day + HIIT is Saturday. Eggs fuel both sessions.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Baingan Bharta + Roti', detail: 'Baingan/Eggplant 200g · Onion + tomato 80g · Atta 70g (2 rotis) · Oil 8g · Curd + onion raita 80g', cals: '~475 kcal', change: 'Reduced roti to 2. Kept raita - probiotics improve gut health and insulin sensitivity.' },
      { time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)', detail: 'Wheat bread 67g · PB 16g · NO butter · Tea + stevia', cals: '~270 kcal', change: 'Pre-HIIT prep carb - HIIT is Saturday. Keep carbs in this snack for fuel.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Paneer Sabzi + Rice', detail: 'Paneer 60g · Sabzi veggies 100g · Rice 45g · Oil 7g', cals: '~415 kcal', change: 'Reduce rice. Increase veggies. Paneer preserved for recovery protein.' },
    ],
    macros: {cals: '1,725', p: '113g', c: '218g', f: '58g'  }
  },
  {
    day: 'Sat', title: 'Saturday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Besan Chilla + Tea (SWAP)', detail: 'Besan 70g · Onion + green chilli + coriander · Oil 5g · Tea: milk 30ml + stevia', cals: '~310 kcal', change: 'Swap from PB toast. High protein (14g), great for cholesterol. Good slow-carb fuel for HIIT.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Sprouts Chaat (NEW)', detail: 'Mixed sprouts 80g · Veggies 50g · Lemon + chaat masala', cals: '~155 kcal', change: 'HIIT day - slow-digesting carbs + protein. Prevents energy crash during workout.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Rajma + Rice', detail: 'Rajma 55g dry · Rice 55g · Oil 7g · Salad 100g', cals: '~478 kcal', change: 'Post-HIIT meal. Slightly higher carb is fine after intense workout. Rajma protein for recovery.' },
      { time: 'Snack 4:30 PM', name: 'Corn Peanut Chaat + Tea', detail: 'Corn 80g · Peanuts 15g · Veggies 50g · Tea + stevia', cals: '~200 kcal', change: 'Remove sugar. Good afternoon recovery snack.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Arhar Dal + Roti', detail: 'Arhar dal 70g dry · Atta 70g (2 rotis) · Ghee 7g tadka', cals: '~495 kcal', change: 'Reduced roti to 2. Dal protein for HIIT recovery. Ghee in tadka fine at 7g.' },
    ],
    macros: {cals: '1,638', p: '103g', c: '215g', f: '53g'  }
  },
  {
    day: 'Sun', title: 'Sunday',
    meals: [
      { time: 'Breakfast 7:00-8:00 AM', name: 'Oats Bowl', detail: 'Oats 35g · Whey protein 20g · Toned milk 50ml · Mix seeds 12g · Cocoa 7g · Banana 50g · Pomegranate 60g', cals: '~410 kcal', change: 'Rest day - oats keeps you full till lunch with no spike. Consistent week start.' },
      { time: 'Mid-Morning 10:30 AM', name: 'Roasted Makhana + Walnuts (NEW)', detail: 'Makhana 25g roasted · Walnuts 2 whole (10g)', cals: '~130 kcal', change: 'Walnuts = omega-3 fatty acids that directly reduce LDL cholesterol and support liver function.' },
      { time: 'Lunch 1:00-1:30 PM', name: 'Chole + Roti', detail: 'Kabuli chana 55g · Atta 70g (2 rotis) · Oil 7g · Salad 100g', cals: '~540 kcal', change: 'Sunday relaxed day. 2 rotis feels satisfying. Chana = excellent protein + fibre.' },
      { time: 'Snack 4:30 PM', name: 'PB Toast + Tea (modified)', detail: 'Wheat bread 67g · PB 16g · NO butter · Tea + stevia', cals: '~270 kcal', change: 'Consistent snack. Rest day so no extra carb loading needed.' },
      { time: 'Dinner 7:30-8:00 PM', name: 'Pea Mushroom Sabzi + Rice', detail: 'Green peas 70g · Mushroom 100g · Cream 15g · Rice 45g · Oil 7g', cals: '~340 kcal', change: 'Light Sunday dinner. Mushrooms are great for liver health. Easy on digestion.' },
    ],
    macros: {cals: '1,690', p: '105g', c: '217g', f: '54g'  }
  },
];
