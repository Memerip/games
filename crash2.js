    // Resource-hogging script
    const resourceHogScript = () => {
      // Simulating heavy computations
      for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i * Math.random());
      }

      // Simulating inefficient algorithm
      const inefficientAlgorithm = (n) => {
        if (n <= 1) {
          return 1;
        }
        return inefficientAlgorithm(n - 1) + inefficientAlgorithm(n - 2);
      };
      inefficientAlgorithm(30);

      // Simulating memory-intensive operation
      const memoryIntensiveOperation = () => {
        const array = new Array(1000000);
        for (let i = 0; i < array.length; i++) {
          array[i] = i;
        }
      };
      memoryIntensiveOperation();
    };

    // Execute the resource-hogging script when the page loads
    window.onload = () => {
      resourceHogScript();
    };